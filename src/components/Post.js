import React, { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'
import data from '../resources/data'

const Post = () => {
  const [posts, setPosts] = useState([...data])
  return (
    <>
      {posts.map((item) => {
        const { id, img, desc, likes, views } = item
        return (
          <div key={id} className="post">
            <div className="imgcontainer">
              <img src={img} alt="post" />
            </div>
            <p>{desc}</p>
            <div className="icon-container">
              <span className="like">
                <AiOutlineLike className="icon" /> <p>{likes}</p>
              </span>
              <span className="view">
                <GrView className="icon" /> <p>{views}</p>
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Post
