import styled from "styled-components";

const Detail = () => {
  const Wrapper = styled.div`
    width: 550px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: pink;
  `;

  return <Wrapper>상세페이지입니당</Wrapper>;
};

export default Detail;
