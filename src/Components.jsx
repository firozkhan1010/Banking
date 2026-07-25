import React, { useEffect, useState } from "react";
import Data from "./Data.jsx";
import "./Dashboard.css";
import CreateAccount from "./CreateAccount.jsx";
import Popup from "./popup.jsx"
import { useSelector } from "react-redux";

function Components({ searchData, ShowSignUp }) {
  const [ShowData, setShowData] = useState([]);
   const [pop,setpop] = useState(false)
  const [id,setId] = useState()

  const reduxData = useSelector((state) => state.userdata.data)

  useEffect(() => {
    setShowData(reduxData);
  }, [reduxData]);

  const All = () => {
    const AllResult = reduxData.filter((item, index) => {
      if (item.accounttype === "saving" || "current" || "salary") {
        return item;
      }
    });
    setShowData(AllResult);
  };

  const Current = () => {
    const CurrentResult = reduxData.filter((item, index) => {
      if (item.accounttype === "current") {
        return item;
      }
    });
    setShowData(CurrentResult);
  };

  const Saving = () => {
    const SavingResult = reduxData.filter((item, index) => {
      if (item.accounttype === "saving") {
        return item;
      }
    });
    setShowData(SavingResult);
  };

  const Salary = () => {
    const SalaryResult = reduxData.filter((item, index) => {
      if (item.accounttype === "salary") {
        return item;
      }
    });
    setShowData(SalaryResult);
  };

 const filterData = reduxData.filter((item) =>
  item.name.toLowerCase().includes(searchData.toLowerCase())
);


  const displayed = searchData ? filterData : ShowData;

  const deleteData = (id) => {
    setId(id)
    setpop(true)
  }

  const confirmDelete = () => {  
  const updatedData = ShowData.filter((item) => item.id !== id);
  setShowData(updatedData);
  setpop(false);
};
  return (
    <>
      {ShowSignUp ? (
        <CreateAccount />
      ) : (
        <div className="container">
          
          <div className="main-dash">
             <div className="right2">
              <h2>Select Accont Type</h2>
              <button onClick={All}>All</button>
              <button onClick={Current}>Current</button>
              <button onClick={Saving}>Saving</button>
              <button onClick={Salary}>Salary</button>
            </div>
            <div className="left2">
              <table border="1px" className="tablehd">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Account Number</th>
                    <th>Phone Number</th>
                     <th>Account Type</th>
                     <th>Amount</th>
                    <th>Delete </th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody className="tablebd">
                  {displayed.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.accountnumber}</td>
                      <td>{item.phonenumber}</td>
                      <td>{item.accounttype}</td>
                      <td>{item.amount}</td>
                      <td>
                      <button onClick={() => deleteData(item.id)}>delete</button>
                      </td>
                      <td>
                      <span className="editbtn">Edit</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {pop && <Popup setpop={setpop} confirmDelete={confirmDelete} id={id} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Components;
