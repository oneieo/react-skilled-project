import { createSlice } from "@reduxjs/toolkit";
import getToday from "../../utils/getToday";
//import date from "../modules/date";

// 초기상태값
const initialState = {
  date: getToday(),
};

// 따로따로 만들었던 액션, 밸류, 크리에이터, 리듀서를 (덕스패턴을 툴킷 패턴으로)바꿔주기

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    addDate: (state, action) => {
      // state 변경 전 값     addDate => e.target.value
      state.date = action.payload;
    },
  },
});

export const { addDate } = dateSlice.actions;
export default dateSlice.reducer;
