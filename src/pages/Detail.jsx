import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 400px;
  margin-top: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boxes = styled.div`
  width: 760px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  //gap: 5px;
`;

const Box = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 760px;
  height: 15px;
  margin-bottom: 5px;
  text-indent: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 750px;
  height: 35px;
  border: none;
  border-radius: 10px;
  text-indent: 10px;
`;

const ButtonBox = styled.div`
  width: 760px;
  height: 55px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 100px;
  color: white;
  background-color: ${(prop) => prop.color};
`;

const Detail = ({
  contents,
  setDate,
  setItem,
  setAmount,
  setDescription,
  setContents,
}) => {
  const { id } = useParams();
  const matchedContent = contents.find((content) => content.id === id);
  console.log(contents);

  const navigate = useNavigate();

  // 1. 날짜, 항목, 내용, 금액을 나타내는 변수명에 useRef로 초기값 설정해주기
  const contentDate = useRef(matchedContent.date);
  const contentItem = useRef(matchedContent.item);
  const contentDescription = useRef(matchedContent.description);
  const contentAmount = useRef(matchedContent.amount);

  const handleModiInput = () => {
    // 2. onChange 이벤트핸들러 -> 변수명.current에 e.target.value 할당해주기
  };

  const handleModiBtn = () => {
    // 3. 로컬스토리지도 업데이트
    navigate("/");
  };

  const handleDeleteBtn = () => {
    const updatedContents = contents.filter((content) => content.id !== id);
    console.log(updatedContents);

    const isConfirmed = confirm("해당 지출내역을 삭제합니다.");
    if (isConfirmed) {
      setContents(updatedContents);
      localStorage.setItem("contents", JSON.stringify(updatedContents));
      navigate("/");
    }
  };

  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Boxes>
        <Box>
          <Label>날짜</Label>
          <Input
            placeholder="YYYY-MM-DD"
            value={matchedContent.date}
            onChange={(e) => setDate(e.target.value)}
          ></Input>
        </Box>
        <Box>
          <Label>항목</Label>
          <Input
            placeholder="지출 항목"
            value={matchedContent.item}
            onChange={(e) => setItem(e.target.value)}
          ></Input>
        </Box>
        <Box>
          <Label>내용</Label>
          <Input
            placeholder="지출 내용"
            value={matchedContent.description}
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
        </Box>
        <Box>
          <Label>금액</Label>
          <Input
            placeholder="지출 금액"
            value={matchedContent.amount}
            onChange={(e) => setAmount(e.target.value)}
          ></Input>
        </Box>
        <ButtonBox>
          <Button color="#418dff" onClick={handleModiBtn}>
            수정
          </Button>
          <Button color="#ff5a97" onClick={handleDeleteBtn}>
            삭제
          </Button>
          <Button color="#777777" onClick={handleBackBtn}>
            뒤로가기
          </Button>
        </ButtonBox>
      </Boxes>
    </Wrapper>
  );
};

export default Detail;
