import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import { DateContext } from "./context/DateContext";
import { ItemContext } from "./context/ItemContext";
import { AmountContext } from "./context/AmountContext";
import { DescriptionContext } from "./context/DescriptionContext";
import { ContentsContext } from "./context/ContentsContext";
import { ClickedMonthContext } from "./context/ClickedMonthContext";
import getToday from "./utils/getToday";

function App() {
  const [date, setDate] = useState(getToday());
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [contents, setContents] = useState([]);
  const [clickedMonth, setClickedMonth] = useState(new Date().getMonth() + 1);

  return (
    <>
      <DateContext.Provider value={{ date, setDate }}>
        <ItemContext.Provider value={{ item, setItem }}>
          <AmountContext.Provider value={{ amount, setAmount }}>
            <DescriptionContext.Provider
              value={{ description, setDescription }}
            >
              <ContentsContext.Provider value={{ contents, setContents }}>
                <ClickedMonthContext.Provider
                  value={{ clickedMonth, setClickedMonth }}
                >
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                  </BrowserRouter>
                </ClickedMonthContext.Provider>
              </ContentsContext.Provider>
            </DescriptionContext.Provider>
          </AmountContext.Provider>
        </ItemContext.Provider>
      </DateContext.Provider>
    </>
  );
}

export default App;
