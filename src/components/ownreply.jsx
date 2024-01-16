import React from 'react'

const Ownreply = (props) => {
  return (
    <div className={`p-4 bg-white col-start-1 col-end-13 w-full rounded-md lg:col-end-10 ${props.replyToReply==true ? `lg:col-start-5` : `lg:col-start-4`}`}> 
                <form className='grid grid-cols-2 gap-y-4 lg:grid-cols-[auto_1fr_auto] lg:gap-x-5 lg:items-start'>

                  <img className='w-8 col-start-1 col-end-2 row-start-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2' src={props.currentuserpic} alt="" />
                  <textarea name="" id="" cols="30" rows="3" className='col-start-1 col-end-3 border rounded-md w-full p-4 lg:col-start-2 lg:col-end-3' placeholder='Add a reply...'></textarea>
                  <button className='text-white bg-ModerateBlue focus:bg-ModerateBlue2 px-6 py-2 rounded-md font-bold col-start-2 col-end-3 row-start-2 self-center justify-self-end lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:self-start'>REPLY</button>
                </form>
                
    </div>
  )
}

export default Ownreply