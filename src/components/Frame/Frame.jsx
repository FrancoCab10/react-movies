import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch } from 'react-router-dom';

const Frame = ({ children, session, onAppLoad }) => {

  useEffect(() => {
    onAppLoad();
  }, [onAppLoad]);

  return (
    <BrowserRouter>
      <Switch>
        {children}
      </Switch>
    </BrowserRouter>
  );
};

Frame.propTypes = {
  children: PropTypes.node,
  session: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onAppLoad: PropTypes.func
};

Frame.defaultProps = {
  children: (<span />),
  session: null,
  onAppLoad: () => {}
};

export default Frame;