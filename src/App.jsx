import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import getToday from "./utils/getToday";

function App() {
  const [date, setDate] = useState(getToday());
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [contents, setContents] = useState([]);
  const [clickedMonth, setClickedMonth] = useState(new Date().getMonth() + 1);

  {
    /*
  !!!!!!!!!! 요구사항 !!!!!!!!!!

  📆 인풋 섹션(InputSection.jsx)
   - ✅ 지출 항목 등록 기능
   - ✅ 입력 내용 유효성 검사
   - ✅ uuid 라이브러리 사용

  📆 월별 버튼 섹션(MonthlySection.jsx)
   - ✅ 월을 클릭했을 때 어떤 탭이 활성화되었는지 styled-components의 조건부 스타일링 하기
   - ✅ 버튼 눌렀을 때 당월 데이터만 가져오기...
   - ✅ 화면 렌더링시 현재 달(예: 5월)에 해당하는 버튼 활성화된 상태로 로딩

  💰 지출내역섹션(Expenditure.jsx)
   - ✅ 금액부분에 천 단위마다 "," 넣기 
   - ✅ description 한 줄까지만 표현하고 그 이상의 내용은 "..."으로 표현하기
   - ✅ 월별에 맞는 데이터 보여주기
      로컬 스토리지를 사용하여 마지막으로 선택된 '월'을 저장하고, 
      해당 페이지가 다시 시작 될 때마다 해당 값을 불러오기 
      useEffect를 사용하여 월이 변경될 때마다 로컬 스토리지에 값을 저장

  상세페이지
   - ✅ 지출내역 클릭 시 id값 가지고 상세화면으로 이동 
   - ✅ 수정, 삭제, 뒤로가기 버튼
   - ✅ 수정할 값을 받는 input을 만들 때 useRef 사용하기
   - ✅ 수정 버튼을 누르면, 기존 지출의 데이터를 수정하고 ‘홈’ 으로 이동(변경사항 바로 적용되어야함)
   - ✅ 삭제 버튼 클릭 시 즉시 삭제하기 보다는 사용자에게 확인받은 뒤 삭제처리 
   - ✅ 삭제 이후에는 홈으로 이동
*/
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                date={date}
                item={item}
                amount={amount}
                description={description}
                contents={contents}
                clickedMonth={clickedMonth}
                setDate={setDate}
                setItem={setItem}
                setAmount={setAmount}
                setDescription={setDescription}
                setContents={setContents}
                setClickedMonth={setClickedMonth}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail contents={contents} setContents={setContents} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
