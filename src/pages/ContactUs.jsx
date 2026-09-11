import { useEffect, useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";


const ContactUs = () => {
  // useEffect(() => {

  //   const timerId = setInterval(() => {
  
  //     console.log("tick");
  
  //   }, 1000);
  
  //   return () => clearInterval(timerId);
  
  // });
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     console.log("tick");
  //   }, 1000);
  
  //   return () => {
  //     clearInterval(timerId); // stop the timer when effect re-runs or component unmounts
  //   };
  // }, []);
  // return (
  //   <>
    
  //   </>
  // );
  const mySkill = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  // const mySkill = []

  const [showSkill, setShowSkill] = useState(false)

  const [showEducation, setShowEducation] = useState(true)


  return (
    <div className="flex flex-col justify-center items-center">
      
      <h2>My Skill</h2>
      <button onClick={()=> setShowSkill(!showSkill)} className="border p-2 rounded bg-blue-400 w-30" ><span className="flex justify-center items-center gap-1 hover:font-medium hover:cursor-pointer" >{(showSkill)? "Hide Skill ": "Show Skill "}<HiArrowCircleRight /></span></button>
      {/* <button>Educational Info</button> */}
      
      {
        showSkill && <div className="border bg-red-400 p-2 rounded">
        
        {
          
          (mySkill.length == 0) ? "You donot have any skill": 
          <>
            <h2>My Skills are:</h2>
            {mySkill.length>0 && mySkill.map((val, index)=>(
            <div key={index}>{index+1}.{val}</div>
          ))}
          </>
          
        }
        {/* {
          mySkill.length>0 && mySkill.map((val, index)=>(
            <div key={index}>{index+1}.{val}</div>
          ))
        } */}
      </div>
      }
      <div className="flex mt-10">
        <button onClick={() => setShowEducation(!showEducation)} className="border w-40 p-2 mt-6 hover:cursor-pointer rounded bg-red-400"><span className="flex items-center gap-2">{(showEducation)? "Certification":"Education"}<HiArrowCircleRight /></span></button> 
          <div className="h-10 w-70">
          {(showEducation)?
          <div className="border p-5 rounded bg-amber-200">
            <h1 className="font-bold">Education</h1>
            <p>BMC</p>
            <p>BSc.CSIT</p>
          </div>
          :
          <div className="border p-5 rounded bg-amber-200">
            <h1 className="font-bold">Certification</h1>
            <p>W3 Developers PVT. Ltd</p>
            <p>React</p>
          </div>}
        </div>
      </div>     
    </div>
  )
}

export default ContactUs;


// useState()
/*
  syntax:
  const[value, setValue] = useState(initialValue)
*/

//useEffect
/*
  Syntax:
  useEffect(function, dependency array)
  
  useEffect(()=>{
    //Line of Code
  },[])

  dependency array = []
*/


