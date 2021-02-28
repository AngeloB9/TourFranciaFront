import styled from 'styled-components';
import { NavLink } from 'react-bootstrap';

export const NavStyle = {
  width: 250,
  height: 750,
  background: '#670305',
  textAlign: 'center',
};

export const Nav_link = styled(NavLink)`
  textdecoration: none;
  color: white;
  &:hover {
    background: white;
    color: black;
  }
`;
