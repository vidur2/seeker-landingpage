import logo from './logo.svg';
import logoPlaceholder from "./logoPlaceholder.png"
import Stack from '@mui/material/Stack';
import './App.css';
import appPage from "./appPage.png"
import { useEffect } from 'react';

function App() {
  const handlePageChange = (e) => {
    e.preventDefault();
    const email = document.getElementById("workEmail").value;
    fetch("https://server-wqp7-neyszkp9p-vidur2s-projects.vercel.app/api/add", {
      method: "POST",
      body: JSON.stringify({
        email
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then((tmp) => console.log(tmp));
  }

  useEffect(() => {
    document.title = "Seeker AI"
  })

  return (
    <div>
    <div className="App" style={{ width: "96%", borderRadius: "10px", marginLeft: "auto", marginRight: "auto",  fontFamily: "SpaceMono-Regular"}}>
      <img alt="logo here" style={{float: "left", marginTop: "3%", marginLeft: "4%"}} src={logoPlaceholder} height={75}></img>
      {/* <a  href="/sign_up" style={{paddingTop: "0.5%", paddingBottom: "0.5%", paddingLeft: "1%", paddingRight: "1%", fontWeight: "normal", fontSize: "100%", marginTop: "3%", float: "right", marginRight: "50%", borderRadius: "5px", borderStyle: "solid", borderColor: "transparent", backgroundColor: "#09E482", color: "black", textDecoration: "none"}} onClick={handlePageChange}>Sign Up</a> */}
      <h1 style={{marginTop: "15%", fontSize: "500%", float: "left", width: "50%", textAlign: "left", fontWeight: "normal", marginLeft: "-10%"}}>A social gym app that meets your logging needs</h1>
      <div style={{ float: "left", clear: "left", backgroundColor: "#121619", borderRadius: "10px", padding: "1% 2%", marginLeft: "6%", marginTop: "2%", marginBottom: "3%", display: "inline-block", whitespace: "nowrap", width: '30%'}}>
        <form style={{display: "inline-block"}}>
        <Stack direction="row" spacing={2}>
        <input type="text" id="workEmail" className='float-child' style={{ backgroundColor: "transparent", width: 'fit-content', borderStyle: "none", color: "white", display: "inline-block", fontSize: "15px", float: "left", marginLeft: "-40%"}} placeholder='Email Address here'></input>
        <button style={{ textDecoration:"none", display: "inline-block", className: 'float-child', paddingTop: "5%", paddingBottom: "5%", borderRadius: "5px", borderStyle: "none", fontSize: "15px", whiteSpace: "nowrap", padddingLeft: "8%", paddingRight: "32%", paddingLeft: "32%", backgroundColor: "#09E482", float: "left", fontWeight: "bold", marginLeft: "15%", color: "black"  }} onClick={handlePageChange}>Sign Up Here</button>
        </Stack>
        </form>
      </div>
    </div>
    <img src={appPage} width="20%" style={{float: "right", marginRight: "7%", marginTop: "-30%"}}></img>
  </div>
  );
}

export default App;
