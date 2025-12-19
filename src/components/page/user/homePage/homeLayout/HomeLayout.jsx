import React from 'react'
import HomeSection1 from '../HomeSection1'
import HomeSection2 from '../HomeSection2'
import HomeSection3 from '../HomeSection3'
import HomeSection4 from '../HomeSection4'
import HomeSection5 from '../HomeSection5'
import HomeSectionService from '../HomeSectionService'
import HomeSectionServiceSection2 from '../HomeSectionServiceSection2'

const HomeLayout = () => {
  return (
    <div>
      <HomeSection1/>
      <HomeSectionService/>
      <HomeSectionServiceSection2/>
      <HomeSection3/>
      <HomeSection2/>
      <HomeSection4/>
      <HomeSection5/>
    </div>
  )
}

export default HomeLayout
