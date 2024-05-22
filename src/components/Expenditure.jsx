import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 405px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: pink;
`;

const Boxes = styled.div`
  width: 760px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6fb9e8;
  gap: 15px;
`;

const Box = styled.div`
  width: 760px;
  height: 61px;
  display: flex;
  flex-direction: column;
  background-color: #7ce079;
`;

const Expenditure = () => {
  return (
    <Wrapper>
      <Boxes>
        <Box></Box>
        <Box></Box>
      </Boxes>
    </Wrapper>
  );
};

export default Expenditure;
