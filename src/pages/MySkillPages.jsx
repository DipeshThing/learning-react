import React from 'react'

const MySkillPages = () => {
    const cardContent = [{
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        heading: "React",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum cumque velit nam magnam. Minima fugit quasi, quam recusandae voluptatum culpa ullam explicabo repellendus, quis beatae sint sunt ipsam quae.
                        At nostrum impedit nisi? Aut suscipit porro veniam dolor dicta ratione numquam reiciendis molestiae enim, eius aliquid at quis aperiam praesentium ea rerum assumenda delectus sequi autem nulla maiores. Possimus.`,
        bgColor: 'bg-pink-200',
        buttonBg: 'bg-pink-600',
        buttonHoverBg: 'hover:bg-pink-400',
        buttonText: 'Learn More'
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        heading: "Python",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum cumque velit nam magnam. Minima fugit quasi, quam recusandae voluptatum culpa ullam explicabo repellendus, quis beatae sint sunt ipsam quae.
                        At nostrum impedit nisi? Aut suscipit porro veniam dolor dicta ratione numquam reiciendis molestiae enim, eius aliquid at quis aperiam praesentium ea rerum assumenda delectus sequi autem nulla maiores. Possimus.`,
        bgColor: 'bg-yellow-200',
        buttonBg: 'bg-yellow-600',
        buttonHoverBg: 'hover:bg-yellow-400',
        buttonText: 'Learn More'
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png?utm_source=simple.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        heading: "JavaScript",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum cumque velit nam magnam. Minima fugit quasi, quam recusandae voluptatum culpa ullam explicabo repellendus, quis beatae sint sunt ipsam quae.
                        At nostrum impedit nisi? Aut suscipit porro veniam dolor dicta ratione numquam reiciendis molestiae enim, eius aliquid at quis aperiam praesentium ea rerum assumenda delectus sequi autem nulla maiores. Possimus.`,
        bgColor: 'bg-blue-200',
        buttonBg: 'bg-blue-600',
        buttonHoverBg: 'hover:bg-blue-400',
        buttonText: 'Learn More'
    }
    ]
    
    
    const CardDesign = ({cardContent}) => {
      return (
        <div className='flex justify-center flex-wrap'>
            {
                cardContent.map((item)=>
                (
                    <div className={`border p-3 rounded-xl shadow-slate-800 hover:shadow-2xl ${item.bgColor} w-80 m-6`}> 
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
  return (
    <>
        <div className='text-center text-4xl underline'>MySkill</div>
        <CardDesign
        cardContent = {cardContent}
        />
    </>
  )
}

export default MySkillPages;