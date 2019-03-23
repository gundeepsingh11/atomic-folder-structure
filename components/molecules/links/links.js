import React from 'react';
import withStyles from '../../../lib/withStyles';
import Link from 'next/link';

const links = props => {
  const { liArray, children } = props;
  return (
    <ul>
      {liArray.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
};

export default withStyles(links, null);
