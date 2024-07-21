import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state) {
      setData(location.state);
    } else {
      setError("Tidak ditemukan destinasi");
    }
  }, [location.state]);

  return (
    <>
      <CommonSection title={"Hasil pencarian destinasi"} />
      <section>
        <Container>
          <Row>
            {error ? (
              <h4 className='text-center'>{error}</h4>
            ) : (
              data.length === 0 ? (
                <h4 className='text-center'>Tidak ditemukan destinasi</h4>
              ) : (
                data.map(tour => (
                  <Col lg='3' className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))
              )
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
