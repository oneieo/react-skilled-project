import styled from "styled-components";

const MonthlySection = () => {
  const Wrapper = styled.div`
    width: 550px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    background-color: lightgreen;
  `;

  return <Wrapper>월별섹션입니당</Wrapper>;
};

export default MonthlySection;
