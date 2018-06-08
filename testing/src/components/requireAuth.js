import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // to abstract in hoc
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // to abstract in hoc
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    // to abstract in hoc
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  // to abstract in hoc
  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

/*

ex usage ex from CommentBox

import requireAuth from './components/requireAuth';

export default requireAuth(CommentBox);

*/