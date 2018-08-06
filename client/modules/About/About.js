import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <p>
          The Bob Marley biography provides testament to the unparalleled influence of his artistry
          upon global culture. Since his passing on May 11, 1981, Bob Marley’s legend looms larger than
          ever, as evidenced by an ever-lengthening list of accomplishments attributable to his music,
          which identified oppressors and agitated for social change while simultaneously allowing
          listeners to forget their troubles and dance.
          Bob Marley was posthumously inducted into the Rock and Roll Hall of Fame in 1994; in December
          1999, his 1977 album “Exodus” was named Album of the Century by Time Magazine and his song
          “One Love” was designated Song of the Millennium by the BBC. Since its release in 1984,
          Marley’s “Legend” compilation has annually sold over 250,000 copies according to Nielsen
          Sound Scan, and it is only the 17th album to exceed sales of 10 million copies since SoundScan
          began its tabulations in 1991.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
