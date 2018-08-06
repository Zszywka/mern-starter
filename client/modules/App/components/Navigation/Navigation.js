import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from '../Header/Header.css';

const Navigation = (props, context) => (
  <ul className={'nav'}>
    <li><Link to="/home" >Home</Link></li>
    <li><Link to="/" >Posts</Link></li>
    <li><Link to="/about" >About</Link></li>
  </ul>
);

export default Navigation;
