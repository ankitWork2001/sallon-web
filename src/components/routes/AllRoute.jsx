import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import VenderLayout from '../page/venderPortfoliou/vernderLayout/VenderLayout'
import ProfileAdmin from '../page/authenction/ProfileAdmin'
import CreateAccount from '../page/authenction/CreateAccount'
import EarnWith from '../page/authenction/EarnWith'
import HomeLayout from '../page/homePage/homeLayout/HomeLayout'
import SignUp from '../page/authenction/SignUp'
import Login from '../page/authenction/Login'



import UserLayout from '../layout/userLayout/UserLayout'
import AdminLayout from '../layout/adminLayout.jsx/AdminLayout'
import AdminDasboard from '../page/adminPanel/AdminDasboard'
import AdminProfile from '../page/adminPanel/AdminProfile'
import AdminService from '../page/adminPanel/AdminService'
import AdminBooking from '../page/adminPanel/AdminBookingAll'
import AdminAiPoster from '../page/adminPanel/AdminAiPoster'
import AdminAiHairStyle from '../page/adminPanel/AdminAiHairStyle'
import HomeProductDetails from '../page/detailspage/HomeProductDetails'
import ServiceDetails from '../page/detailspage/detailsLayout/ServiceDetails'
import GalleryDetails from '../page/detailspage/detailsLayout/GalleryDetails'
import MapAndLocation from '../page/detailspage/detailsLayout/MapAndLocation'
import ReviewDetails from '../page/detailspage/detailsLayout/ReviewDetails'
import BookAppoitment from '../page/detailspage/detailsLayout/BookAppoitment'
import BokingSuccessfull from '../page/detailspage/detailsLayout/BokingSuccessfull'
import AdminSpecialist from '../page/adminPanel/AdminSpecialist'
import UserProtectRoute from '../page/authenction/UserProtectRoute'
import NotAuthorized from '../page/authenction/NotAuthorized'
import AdminProtectRoute from '../page/authenction/AdminProtectRoute'
import SuperAdminLayout from '../layout/superAdminLayout/SuperAdminLayout'
import SuperAdminHomeLayout from '../page/superAdmin/superadminhome/SuperAdminHomeLayout'
import SuperAdminManageSalon from '../page/superAdmin/SuperAdminManageSalon'
import SuperAdminManageUser from '../page/superAdmin/SuperAdminManageUser'
import SuperAdminManageCategory from '../page/superAdmin/SuperAdminManageCategory'
import Default from '../page/homePage/Default'
import ServiceSection1 from '../page/user/service/ServiceSection1'
import AboutSection1 from '../page/user/about/AboutSection1'
import ContactSection1 from '../page/user/contact/ContactSection1'
import SuperAdminDetails from '../page/superAdmin/SuperAdminDetails'
import SuperAdminProfile from '../page/superAdmin/SuperAdminProfile'
import SuperAdminProtectRoute from '../page/authenction/SuperAdminProtectRoute'
import Specialists from '../page/detailspage/detailsLayout/Specialists'
import RoleRegister from '../page/authenction/RoleRegister'
import IndependentAdmin from '../page/authenction/IndependentAdmin'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        {/* user routes */}

        <Route path='*' element={<Default/>}/>

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
          <Route path='/service' element={<ServiceSection1/>}/>
          <Route path='/about' element={<AboutSection1/>}/>
          <Route path='/contact' element={<ContactSection1/>}/>


          <Route path='/bookappoitment' element={<BookAppoitment />} />
          <Route path='/review' element={<BokingSuccessfull />} />

          <Route path='/not-authorized' element={<NotAuthorized />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<ProfileAdmin />} />
          <Route path='/profile/edit' element={<CreateAccount />} />
          <Route path='/earn-with-us' element={<EarnWith />} />
          <Route path='/register' element={<RoleRegister/>}/>
          <Route path='/independentAdmin' element={<IndependentAdmin/>}/>
        </Route>


        {/* admin routes */}

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminProtectRoute><AdminDasboard /></AdminProtectRoute>} />

          <Route path='/admin/dashboard' element={<AdminProtectRoute> <AdminDasboard /> </AdminProtectRoute>} />
          <Route path='/admin/profile' element={<AdminProtectRoute><AdminProfile /></AdminProtectRoute>} />
          <Route path='/admin/service' element={<AdminProtectRoute><AdminService /></AdminProtectRoute>} />
          <Route path='/admin/specialists' element={<AdminProtectRoute><AdminSpecialist /></AdminProtectRoute>} />
          <Route path='/admin/booking' element={<AdminProtectRoute><AdminBooking /></AdminProtectRoute>} />
          <Route path='/admin/ai-poster' element={<AdminProtectRoute><AdminAiPoster /></AdminProtectRoute>} />
          <Route path='/admin/ai-hairstyle' element={<AdminProtectRoute><AdminAiHairStyle /></AdminProtectRoute>} />
        </Route>


        {/* SuperAdminRoute */}
        <Route path='/superadmin' element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminProtectRoute><SuperAdminHomeLayout /></SuperAdminProtectRoute>} />
          <Route path='/superadmin/dashboard' element={<SuperAdminHomeLayout />} />
          <Route path='/superadmin/managesalon' element={<SuperAdminManageSalon/>}/>
          <Route path='/superadmin/manageuser' element={<SuperAdminManageUser/>}/>
          <Route path='/superadmin/managecategory' element={<SuperAdminManageCategory/>}/>
          <Route path='/superadmin/:id' element={<SuperAdminDetails/>}/>
          <Route path='/superadmin/profile' element={<SuperAdminProfile/>}/>
        </Route>


      </Routes>
    </div>
  )
}

export default AllRoute
