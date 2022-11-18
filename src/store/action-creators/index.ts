import * as ProductsActionCreator from './products'
import * as DeleteActionCreator from './deleteProduct'
import * as LikeActionCreator from './likeProduct'
import * as FilterActionCreator from './filterProducts'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...DeleteActionCreator,
  ...ProductsActionCreator,
  ...LikeActionCreator,
  ...FilterActionCreator
}
