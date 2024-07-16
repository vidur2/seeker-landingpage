import logo from './logo.svg';
import logoPlaceholder from "./logoPlaceholder.png"
import Stack from '@mui/material/Stack';
import './App.css';
import appScreens from "./appScreens.png";
import appPage from "./appPage.png"
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

function AppMobile() {
  const [loading, setLoading] = useState(false);

  const handlePageChange = (e) => {
    e.preventDefault();
    setLoading(true)
    const email = document.getElementById("workEmail").value;
    fetch("https://server-pearl-eta.vercel.app/api/add", {
      method: "POST",
      body: JSON.stringify({
        email
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then((tmp) => {
      window.location.assign("/thank_you");
    });
  }

  useEffect(() => {
    document.title = "Seeker AI"
  })

  if (loading) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress size="10rem" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="App" style={{ width: "96%", borderRadius: "10px", margin: "0 auto", fontFamily: "SpaceMono-Regular" }}>
        <img alt="logo here" style={{ marginTop: "3%", marginLeft: "4%" }} src={logoPlaceholder} height={75} />
        <h1 style={{ marginTop: "15%", fontSize: "2.5rem", textAlign: "left", fontWeight: "normal", marginLeft: "4%" }}>A social gym app that meets your logging needs</h1>
        <div style={{ backgroundColor: "#121619", borderRadius: "10px", padding: "1% 2%", margin: "2% 4%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <form style={{ width: "100%" }} onSubmit={handlePageChange}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
              <input type="email" id="workEmail" style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "15px", padding: "10px", flex: "1" }} placeholder='Email Address here' required />
              <button style={{ textDecoration: "none", padding: "10px 20px", borderRadius: "5px", border: "none", fontSize: "15px", backgroundColor: "#09E482", fontWeight: "bold", color: "black", marginLeft: "10px" }} type="submit">Sign Up Here</button>
            </Stack>
          </form>
        </div>
        <img src={appScreens} style={{ width: "100%", maxWidth: "500px", margin: "2% auto", display: "block" }} />
      </div>
    );
  }
}

export default AppMobile;
