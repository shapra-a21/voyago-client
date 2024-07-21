import React from 'react'
import './Newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Klik Subscribe untuk notifikasi terupdate dari Voyago! </h2>

                            <div className='newsletter__input'>
                                <input type='email' placeholder='Enter your email' />
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>
                            <p>Bersama Voyago, liburanmu menjadi menyenangkan! Yakin gak mau subscribe? daripada nyesel ketinggalan promo trip, mending kamu subscribe mulai dari sekarang aja deh yuk :D</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="Male Tourist" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
