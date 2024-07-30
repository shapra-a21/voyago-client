import React, { useState, useContext } from 'react';
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user ? user._id : '',
        userEmail: user ? user.email : '',
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    });

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!user) {
            return alert('Kamu perlu login terlebih dahulu');
        }

        const bookingData = {
            ...booking,
            userId: user._id,
            userEmail: user.email,
        };

        const token = localStorage.getItem('token');


        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            const res = await fetch(`${BASE_URL}/bookings`, {
                method: 'POST',
                headers:headers,
                body: JSON.stringify(bookingData),
            });

            console.log(res);
        
            if (!res.ok) {
                throw new Error('Failed to create booking');
            }
        
            const result = await res.json();
            alert(result.message);
            navigate("/thank-you");
        } catch (err) {
            alert(err.message);
        }
        
    };

    const serviceFee = 15;
    const totalAmount = Number(price) * Number(booking.guestSize) + serviceFee;

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>Rp. {price}.000<span> /orang </span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* ==================== booking form ================ */}
            <div className="booking__form">
                <h5>Informasi</h5>
                <Form className="booking__info-form" onSubmit={handleSubmit}>
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            id="fullName"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="number"
                            placeholder="Nomor telepon"
                            id="phone"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input
                            type="date"
                            placeholder=""
                            id="bookAt"
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder="Jumlah orang"
                            id="guestSize"
                            min="1"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button className="btn primary__btn w-100 mt-4" type="submit">
                        Pesan Sekarang
                    </Button>
                </Form>
            </div>
            {/* ==================== booking end ================ */}

            {/* ==================== booking bottom ================ */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            Rp. {price}.000 <i className="ri-close-line"></i> 1 orang
                        </h5>
                        <span>Rp. {price}.000</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Tax</h5>
                        <span>Rp. {serviceFee}.000</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>Rp. {totalAmount}.000</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
};

export default Booking;
