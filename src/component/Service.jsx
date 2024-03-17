import { nanoid } from 'nanoid'
import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
let cardData = [
  {
    id: nanoid(),
    icon: <FaBook />,
    title: 'Bookkeeping',
    content: 'Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.',
    link:'#'
  },
  {
    id: nanoid(),
    icon: <FaBook />,
    title: 'Bookkeeping',
    content: 'Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.',
    link:'#'
  },
  {
    id: nanoid(),
    icon: <FaBook />,
    title: 'Bookkeeping',
    content: 'Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.',
    link:'#'
  },
  {
    id: nanoid(),
    icon: <FaBook />,
    title: 'Bookkeeping',
    content: 'Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.',
    link:'#'
  },
  {
    id: nanoid(),
    icon: <FaBook />,
    title: 'Bookkeeping',
    content: 'Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.',
    link:'#'
  },
  {
    id: nanoid(),
    icon: <FaBook />,
    title: 'Bookkeeping',
    content: 'Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.',
    link:'#'
  },
]



const Service = () => {
  return (
    <section className="py-10 px-6 flex items-center flex-col justify-center gap-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h4 className="text-xl font-bold " style={{ color: '#006f93' }}>
          OUR SERVICES
        </h4>
        <h5 className="text-3xl text-center font-semibold">
          Real Accounting Services for You
        </h5>
        <p className="text-center text-slate-500">
          Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut
          suspendisse pharetra. Finibus condimentum aenean lacinia sem metus
          Integer.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

        {cardData.map((item)=>{
            return (
              <div
                className="flex flex-col gap-4 card border-slate-600 p-8 rounded hover:bg-sky-800"
                key={item.id}
                style={{ border: '1px solid #006f93', }}
              >
                <div className=" text-3xl text-sky-500 ">{item.icon}</div>
                <h1 className=" text-2xl text-black">{item.title}</h1>
                <p className="text-slate-400">{item.content}</p>
                <a
                  href={item.link}
                  className="flex items-center gap-4  text-xl text-black"
                >
                  <span>Read more</span>
                  <span>
                    <FaArrowRight />
                  </span>{' '}
                </a>
              </div>
            )
        })}




      </div>
    </section>
  )
}

export default Service
