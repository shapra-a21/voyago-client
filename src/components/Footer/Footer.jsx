import React from 'react'
import './Footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/tentang',
    display: 'Tentang'
  },
  {
    path: '/tours',
    display: 'Destinasi'
  },
]
const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

const Footer = () => {

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Sahabat liburanmu!</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-links-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Informasi</h5>
            <ListGroup className="footer__quick-links">
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Informasi</h5>
            <ListGroup className="footer__quick-links">
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Kontak</h5>
            <ListGroup className="footer__quick-links">

                  <ListGroupItem className='ps-0 border-0 d-flex 
                  align-items-center gap-3'>

                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i className="ri-map-pin-line"></i>
                      </span>
                      Alamat:
                    </h6>

                    <p className='mb-0'>Depok, Jawa Barat</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex 
                  align-items-center gap-3'>

                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i className="ri-mail-line"></i>
                      </span>
                      Email:
                    </h6>

                    <p className='mb-0'>voyagotrip@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex 
                  align-items-center gap-3'>

                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i className="ri-phone-fill"></i>
                      </span>
                      Whatsapp:
                    </h6>

                    <p className='mb-0'>0812-1235-6599</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
