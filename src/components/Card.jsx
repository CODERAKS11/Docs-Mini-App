import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"

const Card = ({data,referance}) => {
  return (
    
    <motion.div 
    drag dragConstraints={referance} 
    whileDrag={{scale:1.1}} 
    dragElastic={0.2} 

    dragTransition={{bounceStiffness:100,bounceDamping:30}}
     className='relative flex-shrink-0 text-white w-60 h-72 rounded-[45px] px-8 py-10 bg-zinc-900/90 overflow-hidden'
     >
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full   left-0 '>
            <div className='flex items-center justify-between mb-3 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff"/>}
                   

                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                ) 

            }
            
        </div>
          

    </motion.div>
    
  )
}

export default Card
