import React from 'react'

const WebTech = () => {
   let a = 100;
      let str = " godd morning";

      function print(){
        console.log('good boy guys ');
      }
      function addNumber(a,b){
       let c = a+b;
       console.log(c);
      }
  return (
    <div>
     <h1 className='text-red-600 text-3xl '>value : {a}</h1>
     <h2 className=''>{str}</h2> 
     <button className='border-2  bg-blue-400' onClick={print}>print</button>
     <br />
     <button className='border-2 bg-green-400' onClick={()=>{addNumber(23 ,45)}}>add </button>
      

    </div>
  )
}

export default WebTech
