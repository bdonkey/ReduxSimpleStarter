// Created by scottschmidt on 2/5/17.
import React, {Component} from 'react';

class PostIndex extends Component {
  // update: use componentDidMount https://www.udemy.com/react-redux/learn/v4/announcements
  componentWillMount() {
    console.log('component will mount')
  }

  render() {
    return(
      <div>List of blog posts</div>
    )
  }
}

export default PostIndex

/* it was a component

export default () => {
  return <div>List of blog Posts</div>
}
*/

