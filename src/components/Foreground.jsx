import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {

    const ref = useRef(null);
    const data =[
        {
            desc: "This is the background color of the card that will be displayed",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },

        },
        {
            desc: "This is the text color for the button inside the card",
            filesize: "1.2mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Learn More", tagColor: "bg-blue-500" }
        },
        {
            desc: "This is the border color for the image container in the card",
            filesize: "0.8mb",
            close: true,
            tag: { isOpen: true, tagTitle: "View Details", tagColor: "bg-red-400" }
        }
        
    ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {
            data.map((item,index)=>(
                <Card data={item} referance={ref} />

            )
       )}
        

    </div>
  )
}

export default Foreground
