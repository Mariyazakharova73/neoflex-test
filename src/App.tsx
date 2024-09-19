import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { routeConfig } from "./utils/config/routeConfig";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        {Object.values(routeConfig).map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
