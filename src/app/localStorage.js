export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.error('Cant not save to local storage:', e)
  }
}

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) { return undefined }
    return JSON.parse(serializedState)
  } catch (e) {
    console.error('Cant not load from local storage', e)
    return undefined
  }
}
