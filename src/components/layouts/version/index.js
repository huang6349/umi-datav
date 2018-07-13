import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export const VProps = {
  v: PropTypes.string,
};

class VersionView extends Component {

  static propTypes = {
    ...VProps,
  }

  static defaultProps = {
    v: '0.0.0',
  }

  render() {
    const { v } = this.props;

    return (
      <section className={styles['layout']}>v{v}</section>
    );
  }
}

export default VersionView;
