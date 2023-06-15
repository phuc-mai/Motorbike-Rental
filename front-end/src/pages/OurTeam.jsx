import React from 'react'
import HeroPages from '../components/HeroPages'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import Person1 from "../team-images/team-1.jpg"
import Person2 from "../team-images/team-2.jpg"
import Person3 from "../team-images/team-3.jpg"
import Person4 from "../team-images/team-4.jpg"
import Person5 from "../team-images/team-5.jpg"
import Person6 from "../team-images/team-6.webp"

const OurTeam = () => {
  const teamPeople = [
    {img: Person1, name: "Sunehildeep", job: "Software Engineer"},
    {img: Person2, name: "Phuc Mai", job: "Marketing Cordinator"},
    {img: Person3, name: "Ngoc Mai", job: "Administrator"},
    {img: Person4, name: "Steve Hunt", job: "Motorbike Advisor"},
    {img: Person5, name: "Mike Leguda", job: "Accountant"},
    {img: Person6, name: "Lawrance Ross", job: "Sales Manager"}
  ]

  return (
    <section className='team'>
      <HeroPages name="Our Team" />
      <div className='team-members'>
        {teamPeople.map((member, id) => (
          <div key={id} className='member-box'>
            <img src={member.img} alt="team-member"/>
            <h3>{member.name}</h3>
            <p>{member.job}</p>
          </div>
        ))}
      </div>
      <Banner />
      <Footer />
    </section>
  )
}

export default OurTeam