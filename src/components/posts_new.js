/**
 * Created by scottschmidt on 2/11/17.
 */

import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form'
import  {createPost} from '../actions/index'
import {Link} from 'react-router'

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  // props here from form
  onSubmit(props) {
    this.props.createPost(props) // action creator returns promise
      .then( () => {
        // promise returns blog post created
        // navigate to index
        this.context.router.push('/')
      })
  }

  render() {
    // injected by redux-form
    const {fields:{title, categories, content}, handleSubmit} = this.props; // es6 same as const {x} = this.props.x

    // the ... below deconstructs or makes sure the object (i.e title) gets injected into the form
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create New Post</h3>
        <div className= {`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className= {`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className= {`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Enter a Title"
  }

  if (!values.categories) {
    errors.categories = "Enter a Category"
  }
  if (!values.content) {
    errors.content = "Enter Content"
  }
  return errors
}

export default reduxForm({
  form: 'PostsNew', // does not need to match class .. form is named in reducers/index
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew)