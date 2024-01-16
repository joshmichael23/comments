import React, { useState } from 'react'
import Ownreply from './ownreply';

const replies = (props) => {

  const [edit, setEdit] = useState(false);
  const [score, setScore] = useState(props.score);
  const [del, setDelete] = useState(false);

  const [replyContent, setReplyContent] = useState(props.content);
  return (
    <>
        <div className='grid grid-cols-4 auto-rows-auto gap-3 bg-white w-full h-auto p-5 col-start-2 col-end-13 rounded-md lg:col-start-5 lg:col-end-10 lg:grid-cols-[auto_1fr_auto] lg:gap-5'>
          <div className='flex flex-row justify-start gap-2 row-span-full col-start-1 col-end-5 w-full content-center items-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2'>
            <img className='w-8' src={props.picture} alt="" />
            <p className='font-bold text-GrayishBlue'>{props.username} 
                  {props.username==props.currentusername? <span className='font-bold bg-ModerateBlue text-white rounded-md ml-1 p-1 text-xs'>you</span> : ""}
            </p>
            <p className='text-GrayishBlue'>{props.createdAt}</p>
          </div>
          { 
              edit 
              ? 
              <textarea rows="3" className='border rounded-md w-full p-4 h-max col-start-1 col-end-5 lg:col-start-2'>{'@' + props.replyingTo + ' ' + replyContent}</textarea> 
              
              : 
              <p className='row-start-2 col-start-1 col-end-5 text-GrayishBlue lg:col-start-2 lg:col-end-4'><span className='text-ModerateBlue font-bold'>@{props.replyingTo}</span> {replyContent}</p>
          }

         
          <div className='grid grid-cols-3 row-start-3 col-start-1 col-end-3 bg-LightGrayishBlue2 rounded-md items-center justify-items-center p-2 gap-x-2 w-16 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 lg:grid-cols-1 lg:w-10 '>
            <button onClick={()=>setScore(score+1)}className='text-ModerateBlue font-bold'>+</button>
            <p className='text-ModerateBlue font-bold'>{score}</p>
            <button onClick={()=>setScore(score-1)}className='text-ModerateBlue font-bold'>-</button>
          </div>
          <div className='row-start-3 col-start-2 col-end-5 justify-self-end self-center grid gap-x-2 grid-cols-2 lg:col-start:3 lg:col-end-5 lg:row-start-1 lg:row-end-2'>
          {props.username == props.currentusername?
          
          
          <>
            
            <button onClick={()=>setDelete(del=>!del)}className={`col-start-1 col-end-3 font-bold inline-block justify-self-end ${edit? 'text-PaleRed' : 'text-SoftRed'}`}> <i class="fa-solid fa-trash mr-1"></i> Delete</button>
            <button onClick={()=>setEdit(edit=>!edit)} className={`${edit? 'text-indigo-100':'text-ModerateBlue'} font-bold inline-block justify-self-end col-start-3 col-end-5`}> <i class="fa-solid fa-pencil mr-1"></i> Edit</button>
          
          </> 
          :
            <button onClick={()=>props.setReplyToReply(!props.replyToReply)} className='col-start-3 col-end-5 text-ModerateBlue focus:text-ModerateBlue2 font-bold inline-block justify-self-end'> <i class="fa-solid fa-reply"></i> Reply</button>
          }
          </div>
          
          {edit? 
          <button onClick={()=>{setReplyContent(replyContent), setEdit(edit=>!edit)}}className='bg-ModerateBlue focus:bg-ModerateBlue2 text-white font-bold col-start-3 col-end-5 p-2 rounded-md row-start-4 row-end-5 lg:row-start-3 lg:row-end-4'>UPDATE</button>
          :""
          }
        </div>

        {del?
        <div className="fixed h-full w-full bg-black bg-opacity-50 left-0 right-0 top-0 grid place-items-center">
            <div className='bg-white rounded-md grid gap-x-1 gap-y-4 p-4 items-center justify-items-center w-80'>
              <h1 className='row-start-1 row-end-2 col-start-1 col-end-3 justify-self-start text-lg text-GrayishBlue font-bold'>Delete comment</h1>
              <p className='row-start-2 row-end-3 col-start-1 col-end-3 text-GrayishBlue'>Are you sure you want to delete this comment? This will remove the commend and can't be undone.</p>

              <button onClick={()=>setDelete(del=>!del)} className='row-start-3 row-end-4 col-start-1 col-end-2 bg-GrayishBlue text-white p-2 rounded-md'>NO, CANCEL</button>
              <button  onClick={()=>setDelete(del=>!del)} className='row-start-3 row-end-4 col-start-2 col-end-3 bg-SoftRed text-white p-2 rounded-md'>YES, DELETE</button>
            </div>
        </div>:""
        }
    </>
  )
}

export default replies