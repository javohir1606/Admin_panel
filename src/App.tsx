import { Route, Routes } from "react-router-dom";
import { RoutersData } from "./Router/router";
import { MainLayout } from "./Layout";
import { Login } from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          {RoutersData.map(({ component: Element, id, path }) => (
            <Route
              index={path ? false : true}
              path={path}
              key={id}
              element={<Element />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
