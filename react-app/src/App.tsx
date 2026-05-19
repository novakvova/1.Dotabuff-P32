import { Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";

function App() {

  return (
    <>
        <Routes>
            <Route path="/"  element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path={"books-page"} element={<BooksPage/>} />
            </Route>
        </Routes>
    </>
  )
}

export default App
