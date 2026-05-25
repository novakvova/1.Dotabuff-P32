import { HomePage } from './pages/HomePage';
import { HeroesPage } from './pages/HeroesPage';
import {Route, Routes} from "react-router-dom";
import ProMatchesPage from "./pages/ProMatchesPage";
import Layout from "./widgets/Layout";
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