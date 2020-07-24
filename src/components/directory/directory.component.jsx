import React, { Component } from 'react';

import MenuItem from '../menu-item/menuItem.component';

import './directory.styles.scss';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'lenses',
          imgUrl: 'https://i.imgur.com/UiHbkxu.jpg',
          pageUrl: '',
          id: 1
        },
        {
          title: 'film',
          imgUrl: 'https://i.imgur.com/eje9Qe5.jpg',
          pageUrl: '',
          id: 2
        },
        {
          title: 'accessories',
          imgUrl: 'https://i.imgur.com/hossXyM.jpg',
          pageUrl: '',
          id: 3
        },
        {
          title: 'digital cameras',
          imgUrl: 'https://i.imgur.com/29wB4x9.jpg',
          pageUrl: '',
          size: 'large',
          id: 4
        },
        {
          title: 'film cameras',
          imgUrl: 'https://i.imgur.com/ynqHZLy.jpg',
          pageUrl: 'filmcameras',
          size: 'large',
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}