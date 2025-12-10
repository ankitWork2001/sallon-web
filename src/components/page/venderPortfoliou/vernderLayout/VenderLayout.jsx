import React from 'react'
import VenderSlider from '../VenderSlider'
import VenderAbout from '../VenderAbout'
import VenderService from '../VenderService'
import VenderBookAppointment from '../VenderBookAppointment'
import VenderGellery from '../VenderGellery'
import VernderRaview from '../VernderRaview'
import VenderPerformace from '../VenderPerformace'
import VenderVisit from '../VenderVisit'
import VenderOffer from '../VenderOffer'
import VenderAiHairstyle from '../VenderAiHairstyle'

const VenderLayout = () => {
  return (
    <div>
      <VenderSlider/>
      <VenderAbout/>
      <VenderService/>
      <VenderBookAppointment/>
      <VenderGellery/>
      <VernderRaview/>
      <VenderPerformace/>
      <VenderVisit/>
      <VenderOffer/>
      <VenderAiHairstyle/>
    </div>
  )
}

export default VenderLayout
