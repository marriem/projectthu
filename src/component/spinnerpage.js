// import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

const PageSpinner = ({ color = 'red' }) => {
  return (
    <div className="cr-page-spinner">
      <Spinner color={color} />
    </div>
  );

};

export default PageSpinner;
