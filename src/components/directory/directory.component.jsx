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
          id: 4
        },
        {
          title: 'film cameras',
          imgUrl: 'https://i.imgur.com/BnakT3h.jpg',
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ title, imageUrl, id }) => (
            <MenuItem 
              key={id}
              title={title}
              url={imageUrl}
            />
          ))
        }
      </div>
    );
  }
}