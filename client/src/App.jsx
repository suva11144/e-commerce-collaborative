import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import StarryBackground from './components/StarryBackground';
import ProductCarousel from './components/ProductCarousel';
import Description from './components/Description';
import Categories from './components/Categories';
import TrendingTees from './components/TrendingTees';
import Benefits from './components/Benefits';
import Features from './components/Features';
import TeesShine from './components/TeesShine';
import DiscountSection from './components/DiscountSection';
import TeeInsights from './components/TeeInsights';
import AuthLayout from './components/auth/layout';
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminOrders from './pages/admin-view/orders'   
import AdminFeatures from './pages/admin-view/features'
import AdminProducts from './pages/admin-view/products'
import ShoppingViewLayout from './components/shopping-view/layout'
import NotFound from './pages/not-found/index'
import ShopingHome from './pages/shopping-view/home'
import ShopingAccount from './pages/shopping-view/account'
import ShopingCheckout from './pages/shopping-view/checkout'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/un-auth page/index'
import { TreeDeciduous } from 'lucide-react';
import UserNav from './components/UserNav'


function App() {

  const isAuthenticated = false; // Simulating authentication status
  const user ={
    name: "John Doe",
    role:"user"
  };
 
  return (
    <>
     <Routes>
     <Route path='/' element={
    <div className="min-h-screen relative bg-[#0a192f] z-100">
      <StarryBackground />

      {
        isAuthenticated ? <UserNav/> : <Navbar/>
      }

      <Hero />
      <Description></Description>
      <Categories></Categories>
      <TrendingTees></TrendingTees>
      <Benefits></Benefits>
      <Features></Features>
      <TeesShine></TeesShine>
      <DiscountSection></DiscountSection>
      <TeeInsights></TeeInsights>
      </div>}/>
      <Route path = "/auth" element= {<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout/></CheckAuth>}>
            <Route path="login" element={<AuthLogin/>}></Route>
            <Route path="register" element={<AuthRegister/>}></Route>
          </Route>
          <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout/></CheckAuth>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="orders" element={<AdminOrders/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
            <Route path="products" element={<AdminProducts/>}/>
          </Route>  
          <Route path= "/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingViewLayout/></CheckAuth>}>
            <Route path='account' element={<ShopingAccount/>}/>
            <Route path='checkout' element={<ShopingCheckout/>}/>
            <Route path='home' element={<ShopingHome/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/unauth-page' element={<UnauthPage/>}></Route>
    </Routes>
    </>

  );
}

export default App;