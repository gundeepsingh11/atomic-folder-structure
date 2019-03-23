import React from 'react';
import Link from 'next/link';
import styles from './nav.style';
import withStyles from '../../../lib/withStyles';
import Picture from '../../atoms/Picture';
import Links from '../../molecules/links';
import Settings from '../../../config';

const links = [
  {
    href: 'https://github.com/segmentio/create-next-app',
    label: 'Github',
  },
  {
    href: 'https://github.com/segmentio/create-next-app',
    label: 'Google',
  },
  {
    href: 'https://github.com/segmentio/create-next-app',
    label: 'Yahoo',
  },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = props => {
  const { className } = props;
  const homeArray = [
    {
      key: 'home',
      href: '/',
      label: 'Home',
    },
  ];
  {
    /* <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li> */
  }
  return (
    <nav className={`nav ${className}`}>
      <Links liArray={homeArray}>
        <Picture
          alt="dotted"
          imgPath={Settings.logoImage}
          secondaryPath={Settings.logoImage}
          className="dotted-image"
        />
        <Links liArray={links} />
      </Links>
    </nav>
  );
};

export default withStyles(Nav, styles);
