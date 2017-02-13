# Notes on Blogger
### Lecture 82
#### Five step process to create new features with React Router
1. scaffold out component to use or display
2. add component to routes file for the use to navigate to
(should be able to test in browser after this)
3. implement a button or a way to allow the user to navigate to new form or component
4. add the actual form or interface to new component
5. create the action creator and update the reducer

### Lecture 83
* navigate between routes with react-router using a *link component*
  * *Link* is an actual component and like any component can show up as html in the document
  * it shows up as an anchor tag
  
### Lecture 84 (Redux Form)
* [here](https://github.com/erikras/redux-form)
  * see redux-form.png in root folder for flow
  
### Lecture 85 (Redux Form, create the form)
* reduxForm pulls application state from the component level to the application level

### Lecture 86 (wire up the form)
* reduxForm injects props into our component form
* how reduxForm injects into form

### Lecture 87
* implement an actionCreator for submitting the form
* reduxForm is a connector but adds a third argument
  * *connect args:* mapStateToProps, mapDispatchToProps
  * *reduxform args:* formConfit, mapStateToProps, mapDispatchToProps
  
### Lecture 88 & 89 form validation 
1. create a *validate function* that retures *error object*
2. add it to exported *redux* object
3. add appropriate portion of *error object* to form fields
4. add terinary statements with bootstrap to show errors in red

Add Cancel button to link back
Add a bit of ccs code to styles.css to separate *submit* and *cancel* buttons

### Lecture 90 Navigating on Submit
* we want to navigate for the user after **successfully** submitting form
* use react-router *push*
* use a property on our component called *context*
* *context* is a lot like *props*, like passing properties from parent to child
* but *context* doesn't have to be passed from parent to child
* import *PropTypes* from react
* create a static object in our component to pull in *PropTypes*
* ````javascript
  static contextTypes = {
    router: PropTypes.object
  }
  ````
 * this tells react to search all the components parents until if finds a context call *router*.
 In this case, it will go all the way to *index.js* to find `<Router history={browserHistory} routes={routes}/>`
* now change `<form onSubmit={handleSubmit(this.props.createPost)}>` to 
`<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>` and 
* add this function
* ````javscript
  // props here from form
  onSubmit(props) {
    this.props.createPost(props) // action creator returns promise
      .then( () => {
        // promise returns blog post created
        // navigate to index
        this.context.router.push('/')
      })
  }
  ````
  
### Lecture 91 and 92 Posts Index and Dynamic Route Parameters
* react-router handles *params* for us in routes i.e. *routes.js*
`<Route path = 'posts/:id' component={PostsShow}/>`

### Lecture 93 Loading Data On Render
* create an action creator that can fetch a single post (actions/index.js)
* update reducer to handle action in *reducer_posts.js*
* add *connect* and *action creator (FETCH_POST)* to new component

  
    

