import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis dolorum placeat eveniet possimus, adipisci hic doloribus inventore quod consequuntur nihil aperiam. Consequuntur soluta, officiis vitae tempore ad atque ea!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={'https://picsum.photos/id/2/200'} title='project app1' />
            <ProjectItem img={'https://picsum.photos/id/3/200'} title='project app2' />
            <ProjectItem img={'https://picsum.photos/id/4/200'} title='project app3' />
            <ProjectItem img={'https://picsum.photos/id/6/200'} title='project app4' />
            
        </div>
    </div>
  )
}

export default Projects