// App 컴포넌트의 영역 안에 있는 모든 컴포넌트들은 이 context를 유지

import { createContext } from "react";

// context에 대한 초기값 null로 줌
export const AppContext = createContext(null);
