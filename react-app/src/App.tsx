
import { HeroesPage } from './pages/HeroesPage';
import {Route, Routes} from "react-router-dom";
import ProMatchesPage from "./pages/ProMatchesPage";
import Layout from "./widgets/Layout";
import HomePage from "./pages/HomePage";
function App() {

  return (
    <>
          <Routes>
              <Route path="/"  element={<Layout/>}>
                  <Route index element={<HomePage/>} />
                  <Route path={"heroes-page"} element={<HeroesPage/>} />
                  <Route path={"pro-matches-page"} element={<ProMatchesPage/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;