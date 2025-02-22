import { Routes, Route } from "react-router";
import SelectYourMeal from "./pages/select-your-meal";

const App = () => {
  return (
    <Routes>
      <Route index element={<SelectYourMeal />} />
    </Routes>
  );
};

export default App;
