import React from 'react';
import styles from './Picture.style';
import withStyles from '../../../lib/withStyles';

const Picture = ({ imgPath, secondaryPath, alt, className, ...others }) => {
  return (
    <picture className={`${className} `} {...others}>
      <source srcSet={`${imgPath}`} media="(min-width: 1024px)" />
      <source
        srcSet={`${imgPath}`}
        media="(min-width: 600px) and (max-width: 1023px)"
      />
      <source
        srcSet={`${secondaryPath || imgPath}`}
        media="(max-width: 599px)"
      />
      <img
        className="zoom-child"
        src={`${secondaryPath || imgPath}`}
        title={alt}
        alt={alt}
      />
    </picture>
  );
};

export default withStyles(Picture, styles);
