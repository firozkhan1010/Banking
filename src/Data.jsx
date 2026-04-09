import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  data : [
  {
    id: 1,
    name: "Firoz",
    address: "Aurangabad",
    accounttype: "salary",
    accountnumber: 117,
    phonenumber: 900000001,
    amount:1000
  },
  {
    id: 2,
    name: "Sahil",
    address: "Bulandshahr",
    accounttype: "current",
    accountnumber: 116,
    phonenumber: 900000002,
    amount:3000
  },
  {
    id: 3,
    name: "Aman",
    address: "Delhi",
    accounttype: "saving",
    accountnumber: 115,
    phonenumber: 900000003,
    amount:2500
  },
  {
    id: 4,
    name: "Rohit",
    address: "Noida",
    accounttype: "salary",
    accountnumber: 114,
    phonenumber: 900000004,
    amount:2000
  },
  {
    id: 5,
    name: "Karan",
    address: "Ghaziabad",
    accounttype: "current",
    accountnumber: 113,
    phonenumber: 900000005,
    amount:3500
  },
  {
    id: 6,
    name: "Arjun",
    address: "Meerut",
    accounttype: "saving",
    accountnumber: 112,
    phonenumber: 900000006,
    amount:1000
  },
  {
    id: 7,
    name: "Nikhil",
    address: "Aligarh",
    accounttype: "salary",
    accountnumber: 111,
    phonenumber: 900000007,
    amount:1000
  },
  {
    id: 8,
    name: "Sameer",
    address: "Agra",
    accounttype: "current",
    accountnumber: 110,
    phonenumber: 900000008,
     amount:3000
  },
  {
    id: 9,
    name: "Faizan",
    address: "Lucknow",
    accounttype: "saving",
    accountnumber: 109,
    phonenumber: 900000009,
     amount:3500
  },
  {
    id: 10,
    name: "Adnan",
    address: "Kanpur",
    accounttype: "salary",
    accountnumber: 108,
    phonenumber: 900000010,
     amount:3500
  },
  {
    id: 11,
    name: "Imran",
    address: "Bareilly",
    accounttype: "current",
    accountnumber: 107,
    phonenumber: 900000011,
     amount:1000
  },
  {
    id: 12,
    name: "Salman",
    address: "Moradabad",
    accounttype: "saving",
    accountnumber: 106,
    phonenumber: 900000012,
     amount:3000
  },
  {
    id: 13,
    name: "Asif",
    address: "Rampur",
    accounttype: "salary",
    accountnumber: 105,
    phonenumber: 900000013,
     amount:5000
  },
  {
    id: 14,
    name: "Wasim",
    address: "Sambhal",
    accounttype: "current",
    accountnumber: 104,
    phonenumber: 900000014,
     amount:4000
  },
  {
    id: 15,
    name: "Danish",
    address: "Amroha",
    accounttype: "saving",
    accountnumber: 103,
    phonenumber: 900000015,
     amount:2000
  },
  {
    id: 16,
    name: "Irfan",
    address: "Bijnor",
    accounttype: "salary",
    accountnumber: 102,
    phonenumber: 900000016,
    amount:4000
  },
   {
    id: 17,
    name: "Irfan",
    address: "india",
    accounttype: "salary",
    accountnumber: 101,
    phonenumber: 900000016,
    amount:4000
  },
]
}
const Data = createSlice ({
  name : "userdata",
  initialState,
  reducers: {
    addAcount: (state, action) => {
      state.data.push(action.payload)
    },
 
    tranferAmmount:(state,action) => {
      const {fromAcc,toAcc,amount} = action.payload;

  const sender = state.data.find(acc => acc. accountnumber === fromAcc);

  const receiver = state.data.find (acc => acc. accountnumber === toAcc);
  if(sender && receiver ){
    sender.amount -= amount;
    receiver.amount += amount;
    }
    
}
  }
})

export const {addAcount,tranferAmmount} = Data.actions;
export default Data.reducer