import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes.js"
import Home from "./Routes/Home"
import Contact  from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout.jsx";
import { useDentistContext } from "./Context/Context.jsx";


function App() {

  const { state } = useDentistContext();
  
  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
