const testFunction = store => next => action => {
  next(action)
  console.log('action hello from the middleware', action)
  console.log('$$$$$'.repeat(50))
  console.log('store.getState()', store.getState())
}

export default testFunction
