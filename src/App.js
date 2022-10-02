import Home from "./route/home/home.comoponent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/auth.component";

const Shop = () => {
  return <h2>I am shop</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
