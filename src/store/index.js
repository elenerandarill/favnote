import { createStore } from 'redux'
// rootReducer can be imported under different name, as it is a default import!
import notesApp from '../reducers'


const store = createStore(notesApp)

export default store
