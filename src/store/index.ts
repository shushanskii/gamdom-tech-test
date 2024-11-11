import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

// Slices
import app from './app'
import data from './data'

// Saga
import rootSaga from 'sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    data,
    app,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
