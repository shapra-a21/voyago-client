import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Pilihan Tour Menarik",
    desc: "Nikmati tour menarik dengan tour guide berpengalaman."
  },
  {
    imgUrl: guideImg,
    title: "Tour Guide Berpengalaman",
    desc: "Tour guide berpengalaman untuk setiap destinasi favorit anda."
  },
  {
    imgUrl: customizationImg,
    title: "Penawaran Spesial",
    desc: "Penawaran spesial dan diskon menarik untuk setiap trip Voyago."
  },
]

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index)=> (
      <Col lg="3" md= '6' sm= '12' className='mb-4' key={index}>
      <ServiceCard item={item} />
      </Col>
    ))}
  </>
  );
};

export default ServiceList;