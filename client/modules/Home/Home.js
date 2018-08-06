import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.jumbotron + ' ' + "jumbotron"}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">Hello, world!</h1>
          <hr className="my-4 mt-4" />
          <p>Click on button below if You want to see posts list.</p>
          <p className="lead">
            <Link className="btn btn-primary btn-lg mt-4" to={'/'} href="#" role="button">Learn more</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
