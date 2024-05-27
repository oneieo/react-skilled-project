import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import { ContentsContext } from "./context/ContentsContext";
import { ClickedMonthContext } from "./context/ClickedMonthContext";

function App() {
  const [contents, setContents] = useState([]);
  const [clickedMonth, setClickedMonth] = useState(new Date().getMonth() + 1);

  return (
    <>
      <ContentsContext.Provider value={{ contents, setContents }}>
        <ClickedMonthContext.Provider value={{ clickedMonth, setClickedMonth }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </ClickedMonthContext.Provider>
      </ContentsContext.Provider>
    </>
  );
}

export default App;
