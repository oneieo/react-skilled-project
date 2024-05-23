import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 800px;
  height: 95px;
  margin-top: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boxes = styled.div`
  width: 760px;
  height: 55px;
  display: flex;
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
  width: 160px;
  height: 15px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 155px;
  height: 35px;
  text-indent: 10px;
`;

const Button = styled.button`
  width: 60px;
  margin-top: 21px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5353ff;
  color: white;
`;

const InputSection = ({
  date,
  item,
  amount,
  description,
  contents,
  setDate,
  setItem,
  setAmount,
  setDescription,
  setContents,
}) => {
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleItem = (e) => {
    setItem(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value); //
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  // 지출내역 추가될 때마다(상태변경될때마다) 로컬스토리지에 contents 세팅
  useEffect(() => {
    localStorage.setItem("contents", JSON.stringify(contents));
  }, [contents]);

  const handleSaveBtn = () => {
    if (!date.trim() || !item.trim() || !amount.trim() || !description.trim()) {
      alert("내용을 모두 입력해주세요.");
      return;
    }
    if (isNaN(amount)) {
      alert("금액에는 숫자를 입력하세요.");
      return;
    }

    const newContent = {
      id: uuidv4(),
      date,
      item,
      amount: Number(amount),
      description,
    };
    setContents([newContent, ...contents]);
  };

  return (
    <Wrapper>
      <Boxes>
        <Box>
          <Label>날짜</Label>
          <Input placeholder="YYYY-MM-DD" value={date} onChange={handleDate} />
        </Box>
        <Box>
          <Label>항목</Label>
          <Input placeholder="지출 항목" value={item} onChange={handleItem} />
        </Box>
        <Box>
          <Label>금액</Label>
          <Input
            placeholder="지출 금액"
            value={amount}
            onChange={handleAmount}
          />
        </Box>
        <Box>
          <Label>내용</Label>
          <Input
            placeholder="지출 내용"
            value={description}
            onChange={handleDescription}
          />
        </Box>
        <Button onClick={handleSaveBtn}>저장</Button>
      </Boxes>
    </Wrapper>
  );
};

export default InputSection;
