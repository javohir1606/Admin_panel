import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/main-layout";
import { CategoryList } from "./pages/category/category-list";
import { Create } from "./pages/create/create";
import { SubCategory } from "./pages/Home/subCategory";
import { Login } from "./pages/Home/login";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<MainLayout />}>
            <Route index element={<CategoryList />} />
            <Route path="/app/create" element={<Create />} />
            <Route path="/app/sub-category" element={<SubCategory />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
