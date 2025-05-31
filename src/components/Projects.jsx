import React from 'react'
import { PROJECTS } from '../content'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {
                PROJECTS.map((project,index)=>(
                
                        <div key={index} className='mb-8 flex  flex-wrap items-center gap-20 lg:justify-center'>
                            <motion.a 
                             whileInView={{opacity:1, x:0}}
                             initial={{opacity:0, x: -100}}
                             transition={{duration:1}}
                            href='' className='w-full lg:w-1/4'>
                                <img src={project.image} width={300} height={300} className='mb-6 rounded'  alt={project.title} />
                            </motion.a>
                            <motion.div 
                                 whileInView={{opacity:1, x:0}}
                                 initial={{opacity:0, x: 100}}
                                 transition={{duration:1}}
                                 className='w-full max-w-xl lg:2-3/4'>
                                <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                                <p className='mb-4 text-stone-400'>{project.description}</p>
                                {
                                    project.technologies.map((tech,index)=>(
                                        
                                        
                                    
                                        <span className='mr-2  rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                                            {tech}
                                        </span>

                                       
                                        

                                     
                                    ))
                                }
                                <div className='flex gap-2'>

                                <div className='px-3 py-2 my-4   justify-center rounded font-medium flex items-center text-stone-900 bg-white '>
                                    <a target='_blank' href={project.github}className='flex gap-2' >Github <FaGithub className='text-xl'/></a>
                                </div>
                                <div className='px-3 py-2 my-4 w-25 justify-center rounded flex font-medium items-center text-stone-900 bg-white'>
                                    <a target='_blank' href={project.link}>Visit</a>
                                </div>
                                </div>
                            </motion.div>
                        </div>
                    
                ))
            }
        </div>

    </div>
  )
}

export default Projects