import React, { useEffect, useState } from 'react';
import Say from 'react-say';
import './App.css';
import SpeechRecognition, { useSpeechRecognition, SpeechSynthesisUtterance } from 'react-speech-recognition';

const App = () => {
 const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
 ]
 const command =[]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });
  

 const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
   });
 };
 return (
   <div>
     <div>
       <span>
         Listening:
         {listening ? ' on' : ' off'}
       </span>
       <div>
         
        <div class="button" id="button-2" onClick={resetTranscript}>
            <div id="slide"></div>
          <a href="#" >Reset</a>
        </div>

        <div class="button" id="button-2" onClick={listenContinuously}>
          <div id="slide"></div>
          <a href="#" >Listen</a>
        </div>

        <div class="button" id="button-2" onClick={SpeechRecognition.stopListening}>
          <div id="slide"></div>
          <a href="#" >Stop</a>
        </div>
         {/* <button type="button" onClick={Speaks}>Speak</button> */}
       </div>
     </div>
     <div>
       <span>{message}</span>
     </div>
     <div>
       <span>{transcript}</span>
       <Say
        speak="Hi everyone"
        />
     </div>
   </div>
 );
};

export default App;
