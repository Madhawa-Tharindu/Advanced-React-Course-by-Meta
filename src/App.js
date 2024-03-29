// //import logo from './logo.svg';
// import './App.css';
// import {useState} from "react"

// function App() {

//   const [name, setName] = useState("");
//   const [range, setRange] = useState("5");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName("");
//     setRange("");
//     console.log("Form Submitted!", name, range);
//   }
//     return (
//     <div className="App">

//       <form onSubmit={handleSubmit}>
//          <fieldset>
//           <div className="Field">
//               <label htmlFor='name'>Name:</label>
//               <input
//                 id='name'
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 />
//                 <label htmlFor='range'>Feedback:</label>
//               <input
//                 id='range'
//                 type="range"
//                 min={0}
//                 max={5}
//                 value={range}
//                 onChange={(e) => setRange(e.target.value)}
//                 />
//           </div>
//           <button disabled={!name} type="submit">Submit</button>
//          </fieldset>
//       </form>

//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName !== "" &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      (role === "individual" || "business")
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              id="email"
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label htmlFor="option">
              Role <sup>*</sup>
            </label>
            <select
              id="option"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
