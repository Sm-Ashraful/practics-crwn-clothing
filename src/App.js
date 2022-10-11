import Home from "./route/home/home.comoponent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/auth.component";
import Shop from "./route/shop/shop.component";
import Checkout from "./route/checkout/checkout.comonent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
