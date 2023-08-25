import React, { useState } from 'react';
import Navbar from "./Components/Nav";
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// // import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


//import logo from './PIC.jpg';

function App() {

    
const [alert, setalert] = useState('');
const showalert=(message,type)=>
{
  setalert({
    msg:message,
    type:type
  });
}
  const [mode, setmode] = useState('light')  ;
  
  const toggleMode= ()=>
  {
    if(mode==='light')
    {
      setmode('dark')
      setInterval(() => {
        
        document.title='TextUtils is amazing'  
      }, 2000);
      setInterval(() => {
        
        document.title='TextUtils Lets Istall It'
      }, 1700);
      
      document.body.style.backgroundColor='#0b2e8d';
      document.body.style.color='blue';
      showalert("Dark Mode has been enabled","success");
      
      document.getElementById("textbox").style.backgroundColor=' #8c8c8c';
      
      document.getElementById("txt").style.backgroundColor=' #8c8c8c';
      document.getElementById("textbox2").style.backgroundColor=' #8c8c8c';
      
      document.getElementById("nav").style.backgroundColor=' #0b2e8d';

   
    }
    if(mode!=='green')
    {
      showalert("green Mode has been enabled","primary");
      setmode('green')
      document.title='TextUtils - Green Mode';
      document.getElementById("nav").style.backgroundColor=' #66ff66';
      document.getElementById("textbox").style.backgroundColor='#99bbff';
      
      document.getElementById("txt").style.backgroundColor='#99bbff';
      document.getElementById("textbox2").style.backgroundColor='#99bbff';
      document.body.style.backgroundColor=' #66ff66';
      document.body.style.color='blue';
      showalert("Green Mode Has Been Eanabled ","primary")
    }
else
{
  setmode('light')
  document.title='TextUtils - Litght Mode';
  document.body.style.backgroundColor='white';
  document.body.style.color='black';
  showalert("light Mode has been enabled","primary");
  
  document.getElementById("textbox").style.backgroundColor='#e6e6e6';
      
  document.getElementById("txt").style.backgroundColor='#e6e6e6';
  document.getElementById("textbox2").style.backgroundColor='#e6e6e6';
 

}
  }
  


return (
<>    

<div className="container my-8">
<Alert alert={alert}/>

      <div className="app-container">
        
            
        {/* <Router > */}
      
<Navbar mode={mode} toggleMode={toggleMode}  name= "BISMILLAH" contact="contact us" />
<TextForm mode={mode} heading="EHTER THE TEXT HERE TO ANALYZE" l1="enter a text to format" l2 ="here you can se your result"/>
          
        {/* <Routes basename="/TextUtils">
          <Route path="/About" element={<About/>} component={About} />
         
        </Routes>
        <Routes>
          <Route path="/Home" element={<TextForm/>} component={TextForm} />
         
        </Routes>
        </Router> */}
        
                
      </div>
   





  
</div>
{/*
<About/>
*/}



</>  

  );
  
}

export default App;
