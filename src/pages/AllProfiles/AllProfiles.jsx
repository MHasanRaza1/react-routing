import React from 'react'
import Heading from '../../components/Heading'
import Card from '../../components/Card'
import { usersDetail } from '../../utils/constant/userDetail'
import './AllProfiles.css'

const AllProfiles = () => {
  return (
    <div className='all-profiles'>
        <Heading />
        <div className='allcard-wrapper'>
          {
            usersDetail.map((item,index) => {
              return (
                <Card key={index} data={item} />
              )
            })
          }
        </div>
    </div>
  )
}

export default AllProfiles