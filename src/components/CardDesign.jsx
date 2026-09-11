import React from 'react'


const CardDesign = ({cardContent}) => {
    console.log(cardContent)
  return (
    <div className='flex justify-center bg-gray-700 flex-wrap'>
        {
            cardContent.map((item)=>
            (
                <div className={`border p-3 rounded-xl shadow-amber-100 hover:shadow-2xl ${item.bgColor} w-80 m-6`}> 
                    <div className='p-1 flex justify-center'><img src={item.image} width = '250px' className='h-55 rounded-xl' alt="" /></div>
                    <div className='font-semibold text-center'>{item.heading}</div>
                    <div className='text-sm line-clamp-3'>{item.description}</div>
                    <button className={`mt-5 mb-1.5 ${item.buttonBg} px-2 py-1 rounded-xl text-white shadow-2xl ${item.buttonHoverBg} font-semibold cursor-pointer flex justify-self-center`}><a href="https://en.wikipedia.org/wiki/Lionel_Messi">{item.buttonText}</a></button>
                </div>
            ))
        }
    </div>
  )
}

export default CardDesign;