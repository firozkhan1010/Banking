import { configureStore } from "@reduxjs/toolkit";
import Data from "./Data.jsx"

const Store = configureStore({
    reducer:{
      userdata : Data,
    }
})

export default Store