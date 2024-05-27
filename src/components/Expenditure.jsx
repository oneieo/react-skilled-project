import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ClickedMonthContext } from "../context/ClickedMonthContext";
import { ContentsContext } from "../context/ContentsContext";

const Wrapper = styled.div`
  width: 800px;
  height: 405px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: #ffffff;
  //border: 2px solid #dadada;
  border-radius: 15px;
`;

const Boxes = styled.div`
  width: 760px;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  gap: 15px;
  font-family: "Noto Sans KR", sans-serif;
  //overflow-y: scroll;
`;

const Box = styled.div`
  width: 760px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border: 2px solid #dadada;
  border-radius: 15px;
  cursor: pointer;
`;

const Texts = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
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
  margin-bottom: 3px;
  font-size: 13px;
  color: grey;
`;

const ExpenditureDetail = styled.span`
  width: 600px;
  height: 20px;
  display: block;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #343aa3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  color: #343aa3;
`;

const Expenditure = () => {
  const { clickedMonth } = useContext(ClickedMonthContext);
  const { contents } = useContext(ContentsContext);
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
                  <ExpenditureAmount>
                    {data.amount.toLocaleString()}원
                  </ExpenditureAmount>
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
