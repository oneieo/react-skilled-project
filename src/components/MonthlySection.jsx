import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background-color: lightgreen;
`;

const Boxes = styled.div`
  width: 760px;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: pink;
  gap: 20px;
`;

const MonthBtn = styled.button`
  width: 105px;
  height: 60px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  // MonthBtn의 prop들(key, color, onClick) 중 color에서
  // 연산을 통해 넘겨받은 컬러(prop.color)로 색상 지정하기
  background-color: ${(prop) => prop.color};
  cursor: pointer;
`;

// 정적인 데이터는 컴포넌트 외부에 두는 것이 좋음
const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthlySection = ({ clickedMonth, setClickedMonth }) => {
  const handleMonthBtn = (month) => {
    setClickedMonth(month);
  };

  return (
    <Wrapper>
      <Boxes>
        {monthList.map((month) => {
          return (
            <MonthBtn
              key={month}
              color={month === clickedMonth ? "yellow" : "lightblue"}
              onClick={() => handleMonthBtn(month)}
            >
              {month}월
            </MonthBtn>
          );
        })}
      </Boxes>
    </Wrapper>
  );
};

export default MonthlySection;
