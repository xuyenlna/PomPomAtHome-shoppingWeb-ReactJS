import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GivingBack from "./pages/aboutUs/givingBack/GivingBack";
import OurStory from "./pages/aboutUs/ourStory/OurStory";
import Login from "./pages/account/login/Login";
import Register from "./pages/account/register/Register";
import ResetPassword from "./pages/account/resetPassword/ResetPassword";
import Cart from "./pages/cart/cart/Cart";
import CheckOut from "./pages/cart/checkOut/CheckOut";
import PlaceAnOrder from "./pages/cart/placeAnOrder/PlaceAnOrder";
import Home from "./pages/home/Home";
import BigPillow from "./pages/listPage/accessories/BigPillow";
import BodyPillow from "./pages/listPage/accessories/BodyPillow";
import Curtains from "./pages/listPage/accessories/Curtains";
import BedSkirts from "./pages/listPage/bedding/BedSkirts";
import Coverlet from "./pages/listPage/bedding/Coverlet";
import Duets from "./pages/listPage/bedding/Duets";
import Sales from "./pages/listPage/sales/Sales";
import PageDetail from "./pages/pageDetail/PageDetail";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* collections bedding */}
        <Route exact path="bedding/duets" element={<Duets />} />
        <Route path="bedding/duets/:productId" element={<PageDetail />} />

        <Route exact path="bedding/coverlet" element={<Coverlet />} />
        <Route
          exact
          path="bedding/coverlet/:productId"
          element={<PageDetail />}
        />

        <Route exact path="bedding/bed-skirts" element={<BedSkirts />} />
        <Route
          exact
          path="bedding/bed-skirts/:productId"
          element={<PageDetail />}
        />
        {/* collections accessories */}
        <Route exact path="accessories/big-pillow" element={<BigPillow />} />
        <Route
          exact
          path="accessories/big-pillow/:productId"
          element={<PageDetail />}
        />

        <Route exact path="accessories/body-pillow" element={<BodyPillow />} />
        <Route
          exact
          path="accessories/body-pillow/:productId"
          element={<PageDetail />}
        />

        <Route exact path="accessories/curtains" element={<Curtains />} />
        <Route
          exact
          path="accessories/curtains/:productId"
          element={<PageDetail />}
        />

        {/* sales */}
        <Route exact path="sales" element={<Sales />} />
        <Route exact path="sales/:productId" element={<PageDetail />} />

        {/* about us */}
        <Route exact path="our-story" element={<OurStory />} />
        <Route exact path="giving-back" element={<GivingBack />} />

        {/* cart */}
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="cart/checkout" element={<CheckOut />} />
        <Route exact path="cart/place-an-order" element={<PlaceAnOrder />} />

        {/* account */}
        <Route exact path="account/login" element={<Login />} />
        <Route exact path="account/resetPassword" element={<ResetPassword />} />
        <Route exact path="account/register" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
