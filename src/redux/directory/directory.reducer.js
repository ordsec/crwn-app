// the data in here won't be changing in any way for now,
// but keeping static data in redux state will be better
// in the long run because it makes for easier testing

const INITIAL_STATE = {
  sections: [
    {
      title: 'lenses',
      imgUrl: 'https://i.imgur.com/UiHbkxu.jpg',
      pageUrl: 'shop/lenses',
      id: 1
    },
    {
      title: 'film',
      imgUrl: 'https://i.imgur.com/eje9Qe5.jpg',
      pageUrl: 'shop/film',
      id: 2
    },
    {
      title: 'accessories',
      imgUrl: 'https://i.imgur.com/hossXyM.jpg',
      pageUrl: 'shop/accessories',
      id: 3
    },
    {
      title: 'digital cameras',
      imgUrl: 'https://i.imgur.com/29wB4x9.jpg',
      pageUrl: 'shop/digitalcameras',
      size: 'large',
      id: 4
    },
    {
      title: 'film cameras',
      imgUrl: 'https://i.imgur.com/ynqHZLy.jpg',
      pageUrl: 'shop/filmcameras',
      size: 'large',
      id: 5
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;