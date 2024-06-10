import React from 'react'

const CommentTemplate = ({name,content}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{content}</p>
    </div>
  )
}

export default CommentTemplate;