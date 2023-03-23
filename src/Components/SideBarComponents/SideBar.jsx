import React from 'react' 
import Steps from '../StepsComponents/Steps'

const SideBar = (steps, para, step) => {
  return (
    <>
    <div className='sidebar-cont'>
        <Steps className='active '  steps='Step 1' para='Your Info' step={1}  />
        <Steps  steps='Step 2' para='Select plans'  step={2}  />
        <Steps  steps='Step 3'para='add-ons' step={3}  />
        <Steps  steps='Step 4'para='Summary ' step={4}  />
      
    </div>
    </>
  )
}

export default SideBar