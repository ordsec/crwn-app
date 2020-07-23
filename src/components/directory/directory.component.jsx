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
          id: 1
        },
        {
          title: 'film',
          imgUrl: 'https://i.imgur.com/eje9Qe5.jpg',
          id: 2
        },
        {
          title: 'accessories',
          imgUrl: 'https://i.imgur.com/hossXyM.jpg',
          id: 3
        },
        {
          title: 'digital cameras',
          imgUrl: 'https://i.imgur.com/hK861bQ.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'film cameras',
          imgUrl: 'https://i.imgur.com/ynqHZLy.jpg',
          size: 'large',
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ title, imgUrl, id, size }) => (
            <MenuItem 
              key={id}
              title={title}
              url={imgUrl}
              size={size}
            />
          ))
        }
      </div>
    );
  }
}