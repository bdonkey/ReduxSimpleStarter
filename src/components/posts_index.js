// Created by scottschmidt on 2/5/17.
/*
 we started this component as a function
 then upgraded to a class
 then upgraded to a container
 see below for process
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router'

class PostsIndex extends Component {
  // update: use componentDidMount https://www.udemy.com/react-redux/learn/v4/announcements
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all} // see reducer_posts.js
}

/* es6 shortcut to shortcut */
export default connect(mapStateToProps, {fetchPosts})(PostsIndex)

/* this is shortcut for mapDispatchToProps sequence */
// export default connect(null, {fetchPosts: fetchPosts})(PostsIndex)

/*
 function mapDispatchToProps(dispatch) {
 return bindActionCreators({fetchPosts}, dispatch)
 }

 export default connect(null, mapDispatchToProps)(PostsIndex)
 */

/* it started as a functional component

 import React,  from 'react';
 export default () => {
 return <div>List of blog Posts</div>
 }
 */
/* then upgraded to a class component

 import React, {Component} from 'react';

 class PostsIndex extends Component {
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

 export default PostsIndex
 */
