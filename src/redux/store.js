import { configureStore, compose } from '@reduxjs/toolkit'
import rootReducer from './reducers';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose; 


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: composeEnhencers,
      },
    }),
});


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// store.dispatch(incremented());

export default store;