import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from './E404.module.scss';

const E404 = () => (
  <div className={styles.E404}>
    <h1>404</h1>
    <h5>Oops... We could not find the page you are looking for</h5>
    <Button variant="secondary" size="lg" className="my-4" as={Link} to="/movies">Go to the Movie List instead</Button>
    <img src="/assets/cinema2.svg" alt="404"/>
  </div>
);

export default E404;