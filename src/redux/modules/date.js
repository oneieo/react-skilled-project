import getToday from "../../utils/getToday";

// 초기 상태값: date를 이용해서 만들 스토어에 들어갈 초기 상태값
const initialState = {
  date: getToday(),
};

// 리듀서(함수)
const date = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default date;
