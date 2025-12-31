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
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState("english");
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
     console.log(
            firstname,
            lastname,
            email,
            contact,
            gender,
            selectedOption,
            subject,
            resume,
            url,
            about
        );
  }
  const handleReset = ()=> {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject("english");
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

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
          <br />
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
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <br />
          <label>Your Best Subject</label>
          <input
            type="checkbox"
            id="english"
            name="subject"
            value="english"
            checked={subject === "english"}
            onChange={(e) => setSubject(e.target.value)}
          />
          English
          <input
            type="checkbox"
            id="maths"
            name="subject"
            value="maths"
            checked={subject === "maths"}
            onChange={(e) => setSubject(e.target.value)}
          />
          Maths
          <input
            type="checkbox"
            id="science"
            name="subject"
            value="science"
            checked={subject === "science"}
            onChange={(e) => setSubject(e.target.value)}
          />
          Science
          <br />
          <label>Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={(e) => setResume(e.target.files[0])}
            // placeholder="Upload your Resume"
          />
          <br />
          <label>Enter URL*</label>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="Enter your portfolio link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <br />
          <label>Select your choice </label>
          <select
            id="select"
            name="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select an Option
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">Node JS</option>
              <option value="5"> Express JS</option>
              <option value="6">MongoDB</option>
            </optgroup>
          </select>
          <br />
          <label>About</label>
          <textarea
            id="about"
            name="about"
            rows="10"
            cols="30"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Describe about yourself"
            required
          ></textarea>
          <br />
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;

