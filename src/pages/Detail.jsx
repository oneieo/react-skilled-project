import styled from "styled-components";

const Detail = () => {
  const Wrapper = styled.div`
    width: 800px;
    height: 450px;
    margin-top: 30px;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Boxes = styled.div`
    width: 760px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: pink;
    gap: 10px;
  `;

  const Box = styled.div`
    height: 55px;
    display: flex;
    flex-direction: column;
  `;

  const Label = styled.label`
    width: 760px;
    height: 15px;
    margin-bottom: 5px;
  `;

  const Input = styled.input`
    width: 750px;
    height: 35px;
  `;

  const BoxBottom = styled.div`
    height: 55px;
    display: flex;
  `;

  const Button = styled.button`
    width: 105px;
    height: 60px;
  `;

  return (
    <Wrapper>
      <Boxes>
        <Box>
          <Label>날짜</Label>
          <Input></Input>
        </Box>
        <Box>
          <Label>항목</Label>
          <Input></Input>
        </Box>
        <Box>
          <Label>금액</Label>
          <Input></Input>
        </Box>
        <Box>
          <Label>내용</Label>
          <Input></Input>
        </Box>
        <BoxBottom>
          <Button>수정</Button>
          <Button>삭제</Button>
          <Button>뒤로가기</Button>
        </BoxBottom>
      </Boxes>
    </Wrapper>
  );
};

export default Detail;
