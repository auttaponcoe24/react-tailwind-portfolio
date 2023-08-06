import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2022,
        title: "Facebook",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto unde est, officiis debitis labore, nam rerum libero earum facere quam minus exercitationem vero optio aliquid quidem autem temporibus iure cupiditate!",
    },
    {
        year: 2022,
        title: "Facebook",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto unde est, officiis debitis labore, nam rerum libero earum facere quam minus exercitationem vero optio aliquid quidem autem temporibus iure cupiditate!",
    },
    {
        year: 2022,
        title: "Facebook",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto unde est, officiis debitis labore, nam rerum libero earum facere quam minus exercitationem vero optio aliquid quidem autem temporibus iure cupiditate!",
    },
    {
        year: 2022,
        title: "Facebook",
        duration: "3 Years",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto unde est, officiis debitis labore, nam rerum libero earum facere quam minus exercitationem vero optio aliquid quidem autem temporibus iure cupiditate!",
    },
]

function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work