import React from 'react'
import { Route, Routes } from 'react-router-dom'



// import VenderLayout from '../page/venderPortfoliou/vernderLayout/VenderLayout'
import ProfileAdmin from '../page/authenction/ProfileAdmin'
import CreateAccount from '../page/authenction/CreateAccount'
import EarnWith from '../page/authenction/EarnWith'
import SignUp from '../page/authenction/SignUp'
import Login from '../page/authenction/Login'
import ForgotPassword from '../page/authenction/ForgotPassword'
import OtpVerify from '../page/authenction/OtpVerify'
import ResetPassword from '../page/authenction/ResetPassword'

import RoleRegister from '../page/authenction/RoleRegister'
import IndependentAdmin from '../page/authenction/IndependentAdmin'


// user page

import UserLayout from '../layout/userLayout/UserLayout'
import ServiceDetails from '../page/user/detailspage/detailsLayout/ServiceDetails'
import GalleryDetails from '../page/user/detailspage/detailsLayout/GalleryDetails'
import MapAndLocation from '../page/user/detailspage/detailsLayout/MapAndLocation'
import ReviewDetails from '../page/user/detailspage/detailsLayout/ReviewDetails'
import BookAppoitment from '../page/user/detailspage/detailsLayout/BookAppoitment'
import BokingSuccessfull from '../page/user/detailspage/detailsLayout/BokingSuccessfull'
import HomeLayout from '../page/user/homePage/homeLayout/HomeLayout'
import HomeProductDetails from '../page/user/detailspage/HomeProductDetails'
import AboutSection1 from '../page/user/about/AboutSection1'
import Specialists from '../page/user/detailspage/detailsLayout/Specialists'

// user protectRoute
import UserProtectRoute from '../page/authenction/UserProtectRoute'



// admin page

import AdminDasboard from '../page/adminPanel/AdminDasboard'
import AdminProfile from '../page/adminPanel/AdminProfile'
import AdminService from '../page/adminPanel/AdminService'
import AdminBooking from '../page/adminPanel/AdminBookingAll'
import AdminAiPoster from '../page/adminPanel/AdminAiPoster'
import AdminAiHairStyle from '../page/adminPanel/AdminAiHairStyle'
import AdminSpecialist from '../page/adminPanel/AdminSpecialist'
import AdminLayout from '../layout/adminLayout.jsx/AdminLayout'

// adminProtectRoute
import AdminProtectRoute from '../page/authenction/AdminProtectRoute'


// superAdin page

import SuperAdminLayout from '../layout/superAdminLayout/SuperAdminLayout'
import SuperAdminHomeLayout from '../page/superAdmin/superadminhome/SuperAdminHomeLayout'
import SuperAdminManageSalon from '../page/superAdmin/SuperAdminManageSalon'
import SuperAdminManageUser from '../page/superAdmin/SuperAdminManageUser'
import SuperAdminManageCategory from '../page/superAdmin/SuperAdminManageCategory'
import SuperAdminDetails from '../page/superAdmin/SuperAdminDetails'
import SuperAdminProfile from '../page/superAdmin/SuperAdminProfile'
import SuperAdminCityAndState from '../page/superAdmin/SuperAdminCityAndState'

// superadminProtectRoute
import SuperAdminProtectRoute from '../page/authenction/SuperAdminProtectRoute'




import Default from '../page/user/homePage/Default'
import NotAuthorized from '../page/authenction/NotAuthorized'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        {/* user routes */}

        <Route path='*' element={<Default />} />

        <Route path='/' element={<UserLayout />}>
          <Route index element={<UserProtectRoute><HomeLayout /></UserProtectRoute>} />

          {/* details page and next route */}
          <Route path='/home/product/:id/' element={<HomeProductDetails />}>
            <Route path="services" element={<ServiceDetails />} />
            <Route index element={<ServiceDetails />} />
            <Route path="gallery" element={<GalleryDetails />} />
            <Route path="map" element={<MapAndLocation />} />
            <Route path="reviews" element={<ReviewDetails />} />
            <Route path="specialists" element={<Specialists />} />
          </Route>

          <Route path='/about' element={<AboutSection1 />} />
          <Route path='/bookappoitment' element={<BookAppoitment />} />
          <Route path='/review' element={<BokingSuccessfull />} />
          <Route path='/not-authorized' element={<NotAuthorized />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/otp-verify' element={<OtpVerify />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/profile' element={<ProfileAdmin />} />
          <Route path='/profile/edit' element={<CreateAccount />} />
          <Route path='/earn-with-us' element={<EarnWith />} />
          <Route path='/register' element={<RoleRegister />} />
          <Route path='/independentAdmin' element={<IndependentAdmin />} />
        </Route>


        {/* admin routes */}

        <Route path='/admin' element={<AdminProtectRoute><AdminLayout />  </AdminProtectRoute>}>
          <Route index element={<AdminProtectRoute><AdminDasboard /></AdminProtectRoute>} />
          <Route path='/admin/dashboard' element={<AdminDasboard />} />
          <Route path='/admin/profile' element={<AdminProfile />} />
          <Route path='/admin/service' element={<AdminService />} />
          <Route path='/admin/specialists' element={<AdminSpecialist />} />
          <Route path='/admin/booking' element={<AdminBooking />} />
          <Route path='/admin/ai-poster' element={<AdminAiPoster />} />
          <Route path='/admin/ai-hairstyle' element={<AdminAiHairStyle />} />
        </Route>


        {/* SuperAdminRoute */}
        <Route path='/superadmin' element={<SuperAdminProtectRoute><SuperAdminLayout /></SuperAdminProtectRoute>}>
          <Route index element={<SuperAdminProtectRoute><SuperAdminHomeLayout /></SuperAdminProtectRoute>} />
          <Route path='/superadmin/dashboard' element={<SuperAdminHomeLayout />} />
          <Route path='/superadmin/managesalon' element={<SuperAdminManageSalon />} />
          <Route path='/superadmin/manageuser' element={<SuperAdminManageUser />} />
          <Route path='/superadmin/managecategory' element={<SuperAdminManageCategory />} />
          <Route path='/superadmin/managestate-and-city' element={<SuperAdminCityAndState />} />
          <Route path='/superadmin/:id' element={<SuperAdminDetails />} />
          <Route path='/superadmin/profile' element={<SuperAdminProfile />} />
        </Route>


      </Routes>
    </div>
  )
}

export default AllRoute
