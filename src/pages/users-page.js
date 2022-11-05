import React, { useEffect, useState } from 'react'

import Card from '../components/card'

const UsersPage = ({history}) => {


  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [user, setUser] = useState({})



  useEffect(() => {
    const getAllRepo = async () => {
      setLoading(true)
      let response = await fetch(`https://api.github.com/users/ashsalt/repos?page=${page}&per_page=3`)
      const data = await response.json()
      setApiData(data)
      setLoading(false)
    }
  
    getAllRepo()
  }, [page])

  useEffect(() => {
    const getUserDetails = async () => {
      let response = await fetch(`https://api.github.com/users/ashsalt`)
      const data = await response.json()
      setUser(data)
    }
  
    getUserDetails()
  }, [])

  console.log({ apiData, user })

  const handleNext = (count) => setPage(prevState => prevState + count)
  
  const handlePrev = () => {
    setPage(prevState => {
      if(prevState === 1) return 1;
      return prevState - 1
    })
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div style={{ margin: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Portfolio</h2>

           <div>
        <p>Name: {user.name}</p>
      </div>
      
      <h2 style={{ textAlign: 'center' }}>List of Repo</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '2rem',
          rowGap: '2rem'
        }}
      >
        {apiData.map(user => (
         <Card 
          key={user.name} 
          {...user} 
          onClick={ () => history.push(`/repo/${user.id}`, {user} )}
          />
        ))}
      </div>
 
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       {page > 1 && <p className='cursor' onClick={handlePrev}>{page - 1}</p>}
        <h3 className='cursor'>{page}</h3>
        <p className='cursor' onClick={() => handleNext(1)}>{page + 1}</p>
        <p className='cursor' onClick={() => handleNext(2)}>{page + 2}</p>
      </div>
    </div>
  )
}

export default UsersPage
