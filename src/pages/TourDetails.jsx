import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from './../shared/Newsletter';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import { AuthContext } from './../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const { user } = useContext(AuthContext); // Ambil nilai user dari konteks autentikasi
  const [tourRating, setTourRating] = useState(null);

  // Fetch data from the server
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle loading and error states
  if (loading) return <h4 className="text-center">Loading...</h4>;
  if (error) return <h4 className="text-center">{error}</h4>;

  // Destructure 'tour' safely
  const { photo, title, desc, fasilitas, price, address, reviews, city, maxGroupSize } = tour || {};
  const { totalRating, avgRating } = calculateAvgRating(reviews || []);

  // Submit review handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // Check if user is authenticated
    if (!user) {
      alert('Kamu perlu login terlebih dahulu');
      return;
    }

    const reviewObj = {
      username: user.username,
      reviewText,
      rating: tourRating,
    };

    try {
      const res = await fetch(`${BASE_URL}/tours/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${document.cookie.accessToken}` // Pastikan token dikirim
        },
        credentials: 'include', // Sertakan cookies
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(`Error: ${result.message}`);
      } else {
        alert('Review submitted successfully!');
        // Optionally, you might want to reload the reviews or update the state to reflect the new review
        window.location.reload();
      }
    } catch (err) {
      alert(`Network error: ${err.message}`);
    }
  };

  // Date formatting options
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center">Loading...</h4>}
          {error && <h4 className="text-center">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt={title} />

                  <div className="tour__info">
                    <h1>{title}</h1>

                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? ' (Not rated)' : ` (${reviews?.length})`}
                      </span>

                      <span>
                        <i className="ri-map-pin-user-fill"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i> {city}
                      </span>
                      <span>
                        <i className="ri-wallet-3-line"></i> {price} /pax
                      </span>
                      <span>
                        <i className="ri-group-line"></i> {maxGroupSize}
                      </span>
                    </div>

                    <h5>Destinasi dan Fasilitas</h5>
                    <p>{desc}</p>
                    <p>{fasilitas}</p>
                  </div>

                  {/* Tour reviews section */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span key={rating} onClick={() => setTourRating(rating)}>
                            {rating} <i className="ri-star-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review__input-container">
                        <input
                          className="review__input"
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Tulis pengalamanmu bersama Voyago"
                          required
                        />
                        <div className="btn-container">
                          <button className="btn primary__btn text-white" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review, index) => (
                        <div key={index} className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating} <i className="ri-star-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* End of tour reviews section */}
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
