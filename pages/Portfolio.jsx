import React from 'react'
import Main_heading from '../components/Main_heading/Main_heading'
import Img1 from '../src/assets/images/gallery.jpg'
import Collaborate from '../components/Collaborate/Collaborate'
import Gallery_items from '../components/Gallery/Gallery_items'
const Portfolio = () => {
  return (
    <div>
      <Main_heading image={Img1} title={'Explore Our Gallery'} subtitle={'A Showcase of Exceptional Printing, Creative Designs, and Stunning Signages that Bring Ideas to Life'}/>
      <Gallery_items />
      <Collaborate />
    </div>
  )
}

export default Portfolio