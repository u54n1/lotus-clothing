import React from 'react'
// Styles
import './menu-item.styles.scss'
// Components

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={ `${ size } menu-item hover` }>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${ imageUrl })`
      }}
    />
      <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
)

export default MenuItem
