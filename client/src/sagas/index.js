import { all } from 'redux-saga/effects';
import { watchFetchProducts, watchFetchProductDetails } from './products';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchFetchProductDetails(),
  ]);
}
