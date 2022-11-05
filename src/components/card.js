import React from 'react'

const Card = ({ has_issues, name, language, onClick }) => {
  return (
    <div
    onClick={onClick}
      style={{
        border: '1px solid #c3c3c3',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >

      <div style={{ marginLeft: '1rem' }}>
        <p>Repo: {name}</p>
        <p>Has Issues: {has_issues ? 'True' : 'False'}</p>
        <p>Language: {language}</p>
        {/* <p>Email: {email}</p> */}
      </div>
    </div>
  )
}

export default Card
