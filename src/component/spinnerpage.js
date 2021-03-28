// import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

const PageSpinner = ({ color = 'black' }) => {
  return (
    <div className="spinner">
      <Spinner color={color} />
    </div>
  );

};

export default PageSpinner;
