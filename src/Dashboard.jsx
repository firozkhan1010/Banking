import React, { useState } from "react";
import Header from "./Header";
import Components from "./Components";
import CreateAccount from "./CreateAccount";

function Dashboard() {
  const [ShowSignUp, setShowSignUp] = useState(false);
  const [searchData, setSearchData] = useState("");

  return (
    <div>
      {!ShowSignUp && (
        <Header setShowSignUp={setShowSignUp} setSearchData={setSearchData} />
      )}
      {ShowSignUp ? <CreateAccount /> : <Components searchData={searchData} />}
    </div>
  );
}

export default Dashboard;
