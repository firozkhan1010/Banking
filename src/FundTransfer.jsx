import React, { useState } from "react";
import "./FundTransfer.css";
import { Link, useNavigate } from "react-router-dom";
import { tranferAmmount } from "./Data";
import { useDispatch , useSelector} from "react-redux";

const FundTransfer = () => {
  const [Account1, setAccount1] = useState("");
  const [Account2, setAccount2] = useState("");
  const [Amount, setAmount] = useState("");

  const [Account1Error, setAccount1Error] = useState(false);
  const [Account2Error, setAccount2Error] = useState(false);
  const [AmountError, setAmountError] = useState(false);



  const Dispatch = useDispatch()
  const reduxData = useSelector ((state) => state.userdata.data)

  const navigate = useNavigate()
  const SubmitFund = (e) => {
    e.preventDefault();

    setAccount1Error(false);
    setAccount2Error(false);
    setAmountError(false);

    if (Account1 === "") {
      setAccount1Error(true);
    }
    if (Account2 === "") {
      setAccount2Error(true);
    }
    if (Amount === "") {
      setAmountError(true);
    }
    if (Account1 === "" && Account2 === "" && Amount === "") {
  
      return;
    }

    const FromAccount = reduxData.find(acc => acc. accountnumber === Number(Account1));
    const toAccount =  reduxData.find(acc => acc. accountnumber === Number(Account2));

    if(!FromAccount || !toAccount){
      alert("wrong accoun number");
      return;
    }
    if(FromAccount.accountnumber === toAccount.accountnumber){
      alert("same number is not avilable")
      return;
    }
    if(FromAccount.amount < Number (Amount)){
      alert("balance not avilable")
      return;
    }
  Dispatch(tranferAmmount({
    fromAcc:FromAccount. accountnumber,
    toAcc:toAccount. accountnumber,
    amount:Number(Amount)
  }))
  navigate("/dashboaard")

  };
  return (
    <div className="main-Fund">
      <h2>Fund Transfer</h2>
      <form onSubmit={SubmitFund}>
        <input
          type="text"
          placeholder="Enter account1 "
          onChange={(e) => setAccount1(e.target.value)}
          value={Account1}
        />{" "}
        <br />
        {Account1Error && <p style={{ color: "red" }}>Account 1 is require</p>}
        <input
          type="text"
          placeholder="Enter account2"
          onChange={(e) => setAccount2(e.target.value)}
          value={Account2}
        />{" "}
        <br />
        {Account2Error && <p style={{ color: "red" }}>Account 2 is require</p>}
        <input
          type="number"
          placeholder="Enter ammount"
          onChange={(e) => setAmount(e.target.value)}
          value={Amount}
        />{" "}
        <br />
        {AmountError && <p style={{ color: "red" }}>Amount is require</p>}
        <button className="btn" type="submit">
          Transfer
        </button>
       <Link to="/dashboard">Back</Link>

      </form>
    </div>
  );
};

export default FundTransfer;
