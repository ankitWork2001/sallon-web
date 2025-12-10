import React from 'react'
import SuperAdminHeader from './SuperAdminHeader'
import SuperAdminPerformance from '../SuperAdminPerformance'
import SuperAdminLowPerformance from './SuperAdminLowPerformance'
import SuperAdminPending from './SuperAdminPending'
import SuperAdminSalesMember from './SuperAdminSalesMember'
import SuperAdminGraph from './SuperAdminGraph'

const SuperAdminHomeLayout = () => {
  return (
    <div className='p-2'>
        <SuperAdminHeader />
     
        <div className='mt-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
          <SuperAdminPerformance />
          <SuperAdminLowPerformance />
          <SuperAdminPending />
        </div>

        <div>
          <SuperAdminSalesMember />
          <SuperAdminGraph />
        </div>

      </div>
   
  )
}

export default SuperAdminHomeLayout
