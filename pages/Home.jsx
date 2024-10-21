import React from 'react'
import HeroArea from '../components/Hero_Area/HeroArea'
import What_we_do from '../components/What_we_do/What_we_do'
import Why_choose_us from '../components/Why_choose_us/Why_choose_us'
import Testimonals from '../components/Testimonals/Testimonals'
import Collaborate from '../components/Collaborate/Collaborate'
import CounterUp from '../components/CounterUp/CounterUp'
const Home = () => {
  return (
    <div>
      <HeroArea />
      <What_we_do />
      <Why_choose_us />
      <CounterUp />
      <Testimonals />
      <Collaborate />
    </div>
  )
}

export default Home