import styled from "styled-components";

const Expenditure = () => {
  const Wrapper = styled.div`
    width: 550px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: pink;
  `;

  return <Wrapper>지출내역입니당</Wrapper>;
};

export default Expenditure;
