import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  lenses: 1,
  film: 2,
  accessories: 3,
  digitalcameras: 4,
  filmcameras: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// the param comes from the URL
export const selectCollection = collectionParam => {
  createSelector(
    [selectCollections],
    collections => collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionParam]
    )
  );
};