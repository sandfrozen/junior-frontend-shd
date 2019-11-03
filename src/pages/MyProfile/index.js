import React, {useState, useEffect} from 'react'

import * as Section from 'components/PageSection'
import {UserName, GitHubAvatar} from 'components/MyProfile'

const axios = require('axios')

export const MyProfile = () => {
  
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.github.com/users/sandfrozen')
      setUser(result.data)
    }
    fetchData()
  }, [])
  
  return (
    <Section.Content>
      <Section.Header>
        <UserName>{user ? user.name : 'Loading...'}</UserName>
        {user &&
        <Section.Description>
          <GitHubAvatar src={user.avatar_url}/>
        </Section.Description>}
      </Section.Header>
    </Section.Content>
  )
}

