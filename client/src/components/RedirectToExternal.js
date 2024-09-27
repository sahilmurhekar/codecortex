import { useEffect } from 'react';
import PropTypes from 'prop-types';

const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    // Redirect to the specified URL
    if (url) {
      window.location.replace(url);
    }
  }, [url]);

  // The component doesn't need to render anything
  return null;
};

RedirectToExternal.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RedirectToExternal;