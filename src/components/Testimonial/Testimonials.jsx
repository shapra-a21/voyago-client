import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>Biasanya liburan seringnya sendiri aja yang penting berangkat, 
                    tapi dengan ikut trip Voyago, saya dapat teman traveller lainnya. 
                    Thank you, Voyago!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Dimas</h6>
                        <p>Traveller</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>Awalnya liat tweet mutualku di X, katanya ada 
                    travel agensi yang nawarin berbagai paket trip, 
                    jadi langsung aku kepoin deh! ^^</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Anyaaaanya</h6>
                        <p>Influencer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>Mau jalan-jalan tanpa ribet? Voyago pilihannya!
                terima kasih banyak Voyago, nanti bakal racunin
                temen kantor buat acara gathering tahunan HAHAHA.</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Varrel</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            
            <div className='testimonial py-4 px-3'>
                <p>Sekarang udah gak kebingungan lagi kalo mau healing kemana, 
                    soalnya langsung cek web Voyago pasti langsung auto mau 
                    ikutan tripnya hehehe. </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Tabithaiueo</h6>
                        <p>Mahasiswa</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials;
