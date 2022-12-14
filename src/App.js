import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import useFetch from "./util/useFetch";

const Home = lazy(() => import("./Home"));
const Navbar = lazy(() => import("./component/Navbar"));
const CreateTodo = lazy(() => import("./todoComponent/CreateTodo"));
const Footer = lazy(() => import("./component/Footer"));

function App() {
  const [todos, checked, isPending, error] = useFetch(
    "http://localhost:3001/todos/"
  );

  /* get 메소드를 통해 데이터를 받아오는 useEffect hook은 컴포넌트 내 여기저기 존재하고 있습니다. */
  /* 해당 hook은 반복이 되는 부분이 있으므로 어떻게 custom hook으로 만들 수 있을 지 고민해봅시다. */
  /* util 폴더 내에 존재하는 useFetch에 여러분의 custom hook을 작성해주세요. */

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <div className="app">
        <Suspense>
          <Navbar />
          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home todos={todos} isPending={isPending} checked={checked} />
                }
              />
              <Route path="/create" element={<CreateTodo />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
