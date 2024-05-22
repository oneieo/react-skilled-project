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
`;

const MonthlySection = () => {
  return (
    <Wrapper>
      <Boxes>
        <MonthBtn>1월</MonthBtn>
        <MonthBtn>2월</MonthBtn>
        <MonthBtn>3월</MonthBtn>
        <MonthBtn>4월</MonthBtn>
        <MonthBtn>5월</MonthBtn>
        <MonthBtn>6월</MonthBtn>
        <MonthBtn>7월</MonthBtn>
        <MonthBtn>8월</MonthBtn>
        <MonthBtn>9월</MonthBtn>
        <MonthBtn>10월</MonthBtn>
        <MonthBtn>11월</MonthBtn>
        <MonthBtn>12월</MonthBtn>
      </Boxes>
    </Wrapper>
  );
};

export default MonthlySection;
