import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchZenIfNeeded } from './actions';
import Button from '../../components/Button';

class Zen extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchZenIfNeeded());
  }

  render() {
    const { message, waitLeft } = this.props;
    return (
      <div>
        <p>{message}</p>
        <Button onClick={this.handleClick}>Fetch Zen</Button>
        <p>{waitLeft ? `Please wait ${Math.round(waitLeft)} seconds for more zen` : ''}</p>
      </div>
    );
  }
}

Zen.propTypes = {
  message: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  waitLeft: PropTypes.number,
};

Zen.defaultProps = {
  message: '',
  waitLeft: 0,
};

const mapStateToProps = (state) => {
  const { message, waitLeft } = state.zen;
  return { message, waitLeft };
};

export default connect(mapStateToProps)(Zen);
