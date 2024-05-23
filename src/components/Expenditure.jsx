import { useNavigate } from "react-router-dom";
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
  cursor: pointer;
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

const Expenditure = ({ contents, clickedMonth }) => {
  const navigate = useNavigate();

  const filteredList = contents.filter((data) => {
    if (Number(data.date.slice(5, 7)) === clickedMonth) return data;
  });

  return (
    <Wrapper>
      <Boxes>
        {filteredList.map((data) => {
          return (
            <Box key={data.id} onClick={() => navigate(`/detail/${data.id}`)}>
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
