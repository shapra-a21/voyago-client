import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const SearchBar = () => {
  const locationRef = useRef('');
  const distanceRef = useRef('0');
  const maxGroupSizeRef = useRef('0');
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('Harus diisi terlebih dahulu!');
    }

    if (isNaN(distance) || isNaN(maxGroupSize)) {
      return alert('Jarak dan Jumlah Orang harus berupa angka.');
    }

    try {
      const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${Number(distance)}&maxGroupSize=${Number(maxGroupSize)}`);

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      const result = await res.json();

      navigate('/tours/search', {
        state: result.data
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Col lg='12'>
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span><i className="ri-map-pin-line"></i></span>
            <div>
              <h6>Lokasi</h6>
              <input type="text" placeholder="Kemana destinasi mu?" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span><i className="ri-map-pin-time-line"></i></span>
            <div>
              <h6>Jarak</h6>
              <input type="text" placeholder="Jarak destinasi wisata?" ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span><i className="ri-group-line"></i></span>
            <div>
              <h6>Jumlah Orang</h6>
              <input type="text" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
