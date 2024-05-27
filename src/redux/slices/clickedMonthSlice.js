import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedMonth: new Date().getMonth() + 1,
};

const clickedMonthSlice = createSlice({
  name: "clickedMonth",
  initialState,
  reducers: {},
});

export {};
