import React, { useState } from "react";
import "./CreateAccount.css";
import { useDispatch } from "react-redux";
import { addAcount } from "./Data";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [actype,setactype] = useState("")
  const [amount,setamount] = useState("")

  const [NameError, setNameError] = useState(false);
  const [NumberError, setNumberError] = useState(false);
  const [addressError, setaddressError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [actypeError,setactypeError] = useState(false)
  const [amountError,setamountError] = useState(false)


  const Dispatch = useDispatch()

  const SubmitInformation = (e) => {
    e.preventDefault();

    setNameError(false);
    setNumberError(false);
    setaddressError(false);
    setphoneError(false)
    setactypeError(false)
    setamountError(false)

    if (Name === "") {
      setNameError(true);
    }
    if (Number === "") {
      setNumberError(true);
    }
    if (address === "") {
      setaddressError(true);
    }
    if (phone === "") {
      setphoneError(true);
    }
     if (actype === "") {
      setactypeError(true);
    }
    if (amount < 1000){
      setamountError(true)
    }

   Dispatch(
    addAcount({
      name: Name,
      accountnumber: Number,
      address: address,
      phonenumber: phone,
      accounttype:actype,
      amount: amount

    }),
    {
    setName: (""),
    setNumber: (""),
    setaddress: (""),
    setphone: (""),
    setactype: (""),
    setamount : (""),
    }

   );

    if (Name === "" && Number === "" && address === "" && phone === ""  && actype === "" && amount === "") {
      setNameError(true);
      setNumberError(true);
      setaddressError(true);
      setphoneError(true);
      setactypeError(true)
      setamountError(true)
    }

  };
  return (
    <div className="container2">
      <h1>Create Account </h1>
      <form className="form-input" onSubmit={SubmitInformation}>
        <input
          type="text"
          placeholder="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        {NameError && <p style={{ color: "red" }}>name is require</p>}

         <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        {addressError && <p style={{ color: "red" }}>address is require</p>}

        <input
          type="number"
          placeholder="Account no"
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {NumberError && <p style={{ color: "red" }}>number is require</p>}

        
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
        {phoneError && <p style={{ color: "red" }}> phone is require</p>}

         <input
          type="amount"
          placeholder="add amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        {amountError && <p style={{ color: "red" }}>require minimun 1000$</p>}


      <select value={actype} onChange={(e) => setactype(e.target.value)}>
        <option value="">Select</option>
        <option value="salary">Salary</option>
        <option value="saving">Saving</option>
        <option value="current">Current</option>
      </select>
      {actypeError && <p style={{ color: "red" }}> actype is require</p>}
        <button type="submit">Create Account</button>
        <Link to="/dashboard">Back</Link>
      </form>
    </div>
  );
}

export default CreateAccount;
