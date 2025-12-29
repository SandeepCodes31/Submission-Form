import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div className="App">
      <h1>Submission Form</h1>
      <fieldset>
        <form>
          <label>First Name*</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <br></br>
          <label>Last Name*</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <br/>

          <label>Enter Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <br />

          <label>Contact*</label>
          <input
            id="contact"
            type="tel"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <br />

        <label>Gender*</label>
        <input type='radio' id="male" name="gender" 
        value="male"
        checked={gender==="male"}
        onChange={(e)=>setGender(e.target.value)}
        />
        Male
        
        




        </form>
      </fieldset>
    </div>
  );
}

export default App;
