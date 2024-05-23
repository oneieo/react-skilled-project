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
  justify-content: center;
  background-color: #7ce079;
`;

const Texts = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;
const Left = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Date = styled.span`
  width: 600px;
  height: 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const ExpenditureDetail = styled.span`
  width: 600px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Right = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
`;

const ExpenditureAmount = styled.span`
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Expenditure = () => {
  const dataList = JSON.parse(localStorage.getItem("contents"));
  // 새로고침 해야 새로 저장한 값이 들어오네요??

  return (
    <Wrapper>
      <Boxes>
        {dataList.map((data) => {
          return (
            <Box key={data.id}>
              <Texts>
                <Left>
                  <Date>{data.date}</Date>
                  <ExpenditureDetail>
                    {data.item} - {data.description}
                  </ExpenditureDetail>
                </Left>
                <Right>
                  <ExpenditureAmount>{data.amount}원</ExpenditureAmount>
                </Right>
              </Texts>
            </Box>
          );
        })}
      </Boxes>
    </Wrapper>
  );
};

export default Expenditure;
