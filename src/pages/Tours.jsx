import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import "../styles/tour.css";
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';
import useFetch from '../hooks/useFetch';  // Updated path
import { BASE_URL } from '../utils/config';  // Updated path

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}&limit=${itemsPerPage}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / itemsPerPage);
      setPageCount(pages);
      window.scrollTo(0, 0);
    }
  }, [page, tourCount]);

  const handlePageClick = (number) => {
    setPage(number);
  };

  return (
    <>
      <CommonSection title="Paket trip Voyago" />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <>
              <Row>
                {tours.map(tour => (
                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
              </Row>
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span
                      key={number}
                      onClick={() => handlePageClick(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
