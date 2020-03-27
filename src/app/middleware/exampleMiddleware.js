const exampleMiddleware = store => next => action => {
  next(action)
  // you can perform async calls here and then with promises chain together some logic
  // and eventually dispatch an action which the reducers can pick up with store.dipatch() and store.getState()
}

export default exampleMiddleware
