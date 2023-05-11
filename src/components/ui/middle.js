import React from 'react'
import apr from "../assets/apr.png"
import BELGIUM from "../assets/BELGIUM.png"
import plant from "../assets/plant.png"
import STRAWBERRY from "../assets/STRAWBERRY.png"
import timelock from "../assets/timelock.png"
import title from "../assets/title.png"
import VANILLA from "../assets/VANILLA.png"

function Middle() {
  return (
  <>
  <div class="flex justify-center items-center pb-4">
  <div class=" relative ">
  <img src={title} alt="Full Width Image" className='max-w-2xl'/>
  <img src={plant} alt="Full Width Image" className='max-w-2xl'/>
  <img src={timelock} alt="Full Width Image" className='max-w-2xl'/>
  <img src={apr }alt="Full Width Image" className='max-w-2xl '/>
</div>
</div>
  </>
  )
}

export default Middle