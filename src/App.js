import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Duets from "./pages/listPage/bedding/duets/Duets";
import Coverlet from "./pages/listPage/bedding/coverlet/Coverlet";
import BedSkirts from "./pages/listPage/bedding/bedSkirts/BedSkirts";
import Bigpillow from "./pages/listPage/accessories/bigPillow/BigPillow";
import Bodypillow from "./pages/listPage/accessories/bodyPillow/BodyPillow";
import Curtains from "./pages/listPage/accessories/curtains/Curtains";
import Sales from "./pages/listPage/sales/Sales";
import OurStory from "./pages/aboutUs/ourStory/OurStory";
import GivingBack from "./pages/aboutUs/givingBack/GivingBack";
import Vedio from "./pages/aboutUs/vedio/Vedio";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Cart from "./pages/cart/Cart";
import PageDetail from "./pages/pageDetail/PageDetail";
import ResetPassword from "./pages/account/resetPassword/ResetPassword";
import Login from "./pages/account/login/Login";
import Register from "./pages/account/register/Register";

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
        <Route exact path="bedding/bed-skirts" element={<BedSkirts />} />
        {/* collections accessories */}
        <Route exact path="accessories/big-pillow" element={<Bigpillow />} />
        <Route exact path="accessories/body-pillow" element={<Bodypillow />} />
        <Route exact path="accessories/curtains" element={<Curtains />} />
        {/* sales */}
        <Route exact path="sales" element={<Sales />} />
        {/* about us */}
        <Route exact path="our-story" element={<OurStory />} />
        <Route exact path="giving-back" element={<GivingBack />} />
        <Route exact path="vedio" element={<Vedio />} />
        {/* cart */}
        <Route exact path="cart" element={<Cart />} />

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
