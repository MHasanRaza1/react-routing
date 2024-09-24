import React from 'react'
import './Card.css'
import Button from './Button'

const Card = ({data}) => {
  const {name, profession,description,background,profileImage,id} = data;

  return (
    <div className='card-wrapper'>
      <div className='cover-picture'>
        <img src={background} alt="cover-picture" />
      </div>
      <div className='profile-picture'>
        <img src={profileImage == null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : profileImage} alt="profile-picture" />
      </div>
      <div className='cardtext-wrapper'>
        <h3>{name}</h3>
        <h5>{profession}</h5>
        <p className='desc'>{`${description.slice(0,40)}...`}</p>
        <Button />
      </div>
    </div>
  )
}

export default Card