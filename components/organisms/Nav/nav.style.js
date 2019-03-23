import { css } from 'styled-components';

export default css`
  &.nav {
    text-align: center;
    @media ${props => props.theme.largeMediaQuery} {
      height: 16.25rem;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  nav > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`;
