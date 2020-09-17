import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = ({ session }) => (
  <Container fluid className={styles.Home}>
    <NavBar bg="primary" variant="dark"/>
    <Row className={styles.row}>
      <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className={styles.col}>
        <div className="w-100">
          <Row className="mb-4">
            <Col xs={12} lg={{ span: 8, offset: 2 }}>
              <h1>React Movies</h1>
              <h5>Find out what people are watching now!</h5>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 4, offset: 2 }}>
              <Button variant="secondary" block as={Link} to="/movies" className="mb-2">Movie List</Button>
            </Col>
            {!session && <Col lg={4}>
              <Button variant="outline-primary" block as={Link} to="/login" className="mb-2">Login</Button>
            </Col>}
          </Row>
        </div>
      </Col>
      <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className={styles.col}>
        <img src="assets/cinema.svg" alt="cinema" className="w-75"/>
      </Col>
    </Row>
  </Container>
);

Home.propTypes = {
  session: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
};

Home.defaultProps = {
  session: null,
};

export default Home;