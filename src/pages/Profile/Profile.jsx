import React from 'react'
import { useParams } from 'react-router'
import { usersDetail } from '../../utils/constant/userDetail.js'
import './Profile.css'

const Profile = () => {
  const { id } = useParams();
  const singleUser = usersDetail.find((item) => {
    return item.id == id;
  })
  console.log(singleUser)
  const { name, profession, description, background, profileImage } = singleUser;
  return (
    <div className='profile-page' style={{
      backgroundImage: `url(${background})`}}>
      <div className='userdata-wrapper'>
        <div className="personalprofile-img">
          <img src={profileImage == null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : profileImage} alt="profile-img" />
        </div>
        <div className="personaltext-wrapper">
          <h3 className='name'>{name}</h3>
          <h5 className='profession'>{profession}</h5>
          <p className='description'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile