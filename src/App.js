import React from 'react';
import './App.css';
import sessone from './sessone';
import sesstwo from './sesstwo';
import Nav from './Nav';
import sessthree from './sessthree';
import sessfour from './sessfour';
import sessfive from './sessfive';
import Client from './client'
import Master from './master'
import Gradebook from './Gradebook';
import certificate from './certificate';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ReactDOM from 'react';


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      Appstyle: {filter: "blur(100px)", margin: '20px', textAlign: 'center'} ,
      Pagename: "",
      formdisplay: "block",
      sent: false,
      data:["", "", "", ""],
    };
    
    this.Removeoverlay = this.Removeoverlay.bind(this);
    this.Change = this.Change.bind(this);
  }
  
  Removeoverlay(){
    let fname = document.getElementById("form-fname").value;
    let lname = document.getElementById("form-lname").value;
    let email = document.getElementById("form-email").value;
    let email_domain = email.split("@");

    if(email.replace(/[^@]/g, "").length === 1 && email_domain[1].replace(/[^.]/g, "").length >= 1 && email_domain[1].length > 1 && email_domain[0].length > 0){
      if(fname !== "" && lname !== "" && email !== ""){
        this.setState({
          Appstyle: {margin: '20px', textAlign: 'center'}, 
          Pagename: fname + " " + lname,
          formdisplay: "none",
        });
      }else{
        alert("empty");
        return false;
        throw("Invalid");
      }
    }
    else{
      throw("Invalid");
    }
    
  };

  Change(e) {
    let a = this.state.data;
    if(e.target.id == "form-fname"){
      a[0] = e.target.value;
    }
    else if(e.target.id == "form-lname"){
      a[1] = e.target.value;
    }
    else if(e.target.id == "form-email"){
      a[2] = e.target.value;
    }
    else{
      a[3] = e.target.value;
    }

    this.setState({
      data: a
    });
  };
  
  render(){
    return(
      <Router>      
        <Nav/>
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/sessone' component = {sessone}/>
          <Route path = '/sesstwo' component = {sesstwo}/>
          <Route path = '/sessthree' component = {sessthree}/>
          <Route path = '/sessfour' component = {sessfour}/>
          <Route path = '/sessfive' component = {sessfive}/>
          <Route path = '/Gradebook' component = {Gradebook}/>
          <Route path = '/certificate' component = {certificate}/>
          <Route path = '/client' component = {Client}/>
          <Route path = '/master' component = {Master}/>
        </Switch>
      </Router>
    );
  }
}

class Home extends React.Component{

  render(){
    var links = ['sessone', '/sesstwo', '/sessthree', '/sessfour', '/sessfive'];
    var aboutheadertext = ['Understanding The Population With Special Needs', 'Engaging Individuals With Special Needs', 'Providing A Great Environment & Experience', 'Engaging Individuals With Special Needs', 'Providing A Great Environment & Experience'];
    var abouttext = ['Muscular dystrophy, multiple sclerosis, chronic asthma, epilepsy, etc.',
    'Down syndrome, autism, dyslexia, processing disorders',
    'ADD, bi-polar, oppositional defiance disorder, etc.',
    'Blind, visually impaired, deaf, limited hearing',
    'Engaging properly with best practices with the special needs community.'    
  ];

    var items = [];
    var sessions = ['Physical', 'Developmental', 'Behavioral/Emotional', 'Sensory Impaired', 'Engagement'];

    for (const [index, value] of links.entries()) {
      items.push(<div key={index.toString()} ><h1>{aboutheadertext[index]}</h1><p>{abouttext[index]}</p><Link id={"sess"+[index]} className = "navlist" key="index" type="submit" to={value}><li>{sessions[index]}</li></Link><br/><br/><br/><br/></div>)
    }
    return(
          <div id="homepagedashboard">
            <div id="home">
              {items}
            </div>
          </div>
    );
  }
}

module.hot.accept('./App', function () {
  ReactDOM.render(<Home />)
})

export default App;


