import frontimg2 from "./assets/frontimg2.jpg";
import "./App.css";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPasswprd, setShowPassword] = useState(false);
  const [ShowDashboard, setShowDashboard] = useState(false);

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate();

  const fixEmail = "firoz";
  const fixPassword = "firoz123";

  const submitInfo = () => {
    setEmailErr(false);
    setPasswordErr(false);

    if (email === "") {
      setEmailErr(true);
    }
    if (password === "") {
      setPasswordErr(true);
    }

    if (email === "" && password === "") {
      setEmailErr(true);
      setPasswordErr(true);
    }

    if (email === fixEmail && password === fixPassword) {
      navigate('/dashboard');
    } else {
      alert("envalid");
    }
  };

  return (
    <>
      {ShowDashboard ? (
        <Dashboard />
      ) : (
        <div className="container">
          <div className="right">
            <img src={frontimg2} alt="frontimg2" height="100%" width="100%" />
            <div className="img-text">
              <h1>Forge</h1>
              <h1>
                Transformation at <br />
                Scale
              </h1>
              <p>
                An English paragraph is a collection of sentences focusing on a
                single <br />
                main idea, typically starting with a topic sentence, followed
                <br /> by supporting details examples, reasons
              </p>
            </div>
          </div>
          <div className="left">
            <h1>Welcome to Froge-X</h1>
            <div className="child-div">
              <h2>Sign in to your account</h2>
              <label>Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setemail(e.target.value)}
              />
              {emailErr && <p style={{ color: "red" }}>email require</p>}
               <label>Password</label>
             <div className="BtnShow">
               <input
                type={showPasswprd ? "text" : "password"}
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <button onClick={() => setShowPassword(!showPasswprd)}
              >
                {showPasswprd ? <FaEyeSlash /> : <IoEyeSharp />}</button>
             </div>
               {passwordErr && 
                  <p style={{ color: "red" }}>password require</p>
                }
              <button className="subbtn" onClick={submitInfo}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
