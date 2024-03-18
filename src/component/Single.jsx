import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <article className="question grid grid-cols-1 gap-5 lg:grid-cols-2">
      <header className="rounded transition-all duration-200  border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
        <h5>{title}</h5>
        <button
          className="question-btn flex items-center justify-between w-full px-4 py-5 sm:p-6"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
