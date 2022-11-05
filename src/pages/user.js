import React from 'react'

const User = ({location: {state: user}}) => {
  const userDetail = user.user;
  console.log(userDetail)
  return <div>{userDetail.git_commits_url}</div>
}

export default User
