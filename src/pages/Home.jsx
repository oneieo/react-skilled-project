import Expenditure from "../components/Expenditure";
import InputSection from "../components/InputSection";
import MonthlySection from "../components/MonthlySection";

const Home = ({
  date,
  item,
  amount,
  description,
  contents,
  clickedMonth,
  setDate,
  setItem,
  setAmount,
  setDescription,
  setContents,
  setClickedMonth,
}) => {
  return (
    <div>
      <InputSection
        date={date}
        item={item}
        amount={amount}
        description={description}
        contents={contents}
        setDate={setDate}
        setItem={setItem}
        setAmount={setAmount}
        setDescription={setDescription}
        setContents={setContents}
      />
      <MonthlySection
        clickedMonth={clickedMonth}
        setClickedMonth={setClickedMonth}
      />
      <Expenditure contents={contents} clickedMonth={clickedMonth} />
    </div>
  );
};

export default Home;
