import Home from "./route/home/home.comoponent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import SignIn from "./route/sign-in/signin.component";

const Shop = () => {
  return <h2>I am shop</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
