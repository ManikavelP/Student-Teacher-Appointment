import React from 'react'

import ServicesList from "../components/Services/ServicesList";

const Services = () => {
  return (
    <section>
    <div className="container">
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">
          Our Services</h2>
          <p className="text_para text-center">
          </p>
      </div>
      <ServicesList/>
    </div>
   </section>
  )
}

export default Services