import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as StarEmpty } from '../icons/star_border.svg';
import styles from './RatingWidget.module.scss';

const RatingWidget = ({rating, onChange}) => {
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    setSelectedRating(rating);
  }, [rating]);

  return (
    <ul className={styles.RatingWidget} onMouseLeave={() => setSelectedRating(rating)}>
      {[1, 2, 3, 4, 5].map((number) => (
        <li key={number} onMouseEnter={() => setSelectedRating(number)} onClick={() => onChange(number)}>
          {selectedRating >= number ? <Star /> : <StarEmpty />}
        </li>
      ))}
    </ul>
  );
};

RatingWidget.propTypes = {
  rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  onChange: PropTypes.func
};

RatingWidget.defaultProps = {
  rating: 0,
  onChange: () => {}
};

export default RatingWidget;