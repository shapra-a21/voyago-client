import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroImg03 from '../assets/images/hero-img03.jpg';
import experienceImg from '../assets/images/experience.png';

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      {/* ============ hero section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <h1 className="text-[28px] leading-[32px] text-headingColor font-[600] md:text-[40px] md:leading-[0px]">
                  Wonderful Indonesia, jadikan Voyago sahabat liburan mu!
                  <span className="highlight"></span>
                </h1>
                <p>
                  Berencana pergi liburan? Cek destinasi wisata dengan kemudahan paket trip Voyago.
                      Dijamin kamu gak perlu bingung lagi mau liburan kemana, yuk langsung aja berlibur bersama Voyago! Liburan happy tanpa ribettt.
                </p>
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Sahabat liburanmu"} />
                </div>
              </div>
            </Col>

            <Col lg="3" md="6" sm="12">
              <div className="hero__img-box mt-4">
                <img src={heroImg} alt="Hero Image 1" />
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="hero__img-box mt-4 mt-lg-0">
                <img src={heroImg02} alt="Hero Image 2" />
              </div>
              <div className="hero__img-box">
                <img src={heroImg03} alt="Hero Image 3" />
              </div>
            </Col>

            <Col lg="2" className="mt-2">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ hero section end ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h2 className="services__subtitle">Bersama Voyago</h2>
              <h2 className="services__title">Kami berikan pelayanan terbaik</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Trip"} />
              <h2 className="featured__tour-title">Paket trip Voyago</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Pengalaman'} />

                <h2>Rasakan pengalaman tour seru<br />dengan pelayanan terbaik kami</h2>
                <p>
                  Penawaran spesial dan diskon menarik untuk setiap trip Voyago
                  <br />
                  dengan ulasan positif dari pelanggan yang memastikan kepuasan Anda.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className='counter__box'>
                  <span>20k+</span>
                  <h6>Trip berjalan aman</h6>
                </div>
                <div className='counter__box'>
                  <span>10k+</span>
                  <h6>Pelanggan</h6>
                </div>
                <div className='counter__box'>
                  <span>8</span>
                  <h6>Tahun pengalaman</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className='experience__img'>
                <img src={experienceImg} alt="Experience Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============ */}

      {/* ============ gallery section start ============ */}
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>
              Enjoy the trip bersama Voyago!
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
      {/* ============ gallery section end ============ */}

      {/* ============ testimonial section start ============ */}
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={'Fans Love'} />
            <h2 className='testimonial__title'>Apa kata Voyaganks tentang Voyago?</h2>
          </Col>
          <Col lg="12">
            <Testimonials />
          </Col>
        </Row>
      </Container>
      {/* ============ testimonial section end ============ */}
      <Newsletter />
    </>
  );
}

export default Home;
