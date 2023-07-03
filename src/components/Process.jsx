import React from 'react'

const Process = () => {
  return (
    <section className='process'>
      <div className='process__title'>
        <h3>Plan your trip now</h3>
        <h1>Quick & easy Motorbike rental</h1>
      </div>

      <div className='process__details'>
        <div className='process__details_box'>
          <img src='images/process-1.png'/>
          <h3>Select Motorbike</h3>
          <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className='process__details_box'>
          <img src='images/process-2.png'/>
          <h3>Contact Operator</h3>
          <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className='process__details_box'>
          <img src='images/process-1.png'/>
          <h3>Let's Drive</h3>
          <p>Whether you're hitting the open road, we've got you covered with our wide range of motorbike</p>
        </div>
      </div>
    </section>
  )
}

export default Process