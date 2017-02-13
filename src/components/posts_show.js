/**
 * Created by scottschmidt on 2/12/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPost} from '../actions/index'

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  render() {
    return (
    <div> show post {this.props.params.id}</div>
  )
    ;
  }
}

export default connect(null,{fetchPost})(PostsShow)
