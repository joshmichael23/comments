import React, { useState } from 'react'
import Replies from './replies'
import Ownreply from './ownreply';

const comments = (props) => {
  const [reply, setReply] = useState(false);
  const [replyToReply, setReplyToReply] = useState(false);
  const [score, setScore] = useState(props.score);  
  return (
    <>
        <div className='grid grid-cols-4 auto-rows-auto gap-3 bg-white h-auto p-5 col-start-1 col-end-13 rounded-md w-full lg:col-start-4 lg:col-end-10 lg:grid-cols-[auto_1fr_auto] lg:grid-rows-[auto_1fr] lg:gap-5'>
          <div className='flex flex-row justify-start gap-2 row-span-full col-start-1 col-end-5 w-full content-center items-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2'>
            <img className='w-8' src={props.picture} alt="" />
            <p className='font-bold text-GrayishBlue'>{props.username}</p>
            <p className='text-GrayishBlue'>{props.createdAt}</p>
          </div>
          <p className='row-start-2 col-start-1 col-end-5 text-gray-600 lg:col-start-2 lg:col-end-4'>{props.content}</p>
          <div className='grid grid-cols-3 row-start-3 col-start-1 col-end-2 bg-LightGrayishBlue2 rounded-md items-center justify-items-center p-1 w-16 lg:grid-cols-1 lg:w-10 lg:row-start-1 lg:items-start lg:row-end-3 lg:col-start-1 lg:col-end-2'>
            <button onClick={()=>setScore(score+1)} className='text-ModerateBlue font-bold'>+</button>
            <p className='text-ModerateBlue font-bold'>{score}</p>
            <button onClick={()=>setScore(score-1)} className='text-ModerateBlue font-bold'>-</button>
          </div>

          <button onClick={(e)=> {e.preventDefault(), setReply(reply=>!reply)}} className='row-start-3 col-start-3 col-end-5 text-ModerateBlue focus:text-ModerateBlue2  font-bold inline-block self-center justify-self-end lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 lg:self-start'> <i class="fa-solid fa-reply mr-1"></i> Reply</button>
        </div>

        {reply? <Ownreply replyToReply={false} currentuserpic={props.currentuserpic} /> : ""}
        
        {
            Object.values(props.replies).map((x,i)=>(

                <>
                    <div className="h-full col-start-1 col-end-2 w-5 border-solid border-l-2 border-l-LightGray lg:col-start-4 lg:col-end-5 lg:first-of-type:translate-y-5 " >
                    </div>

                    <Replies
                        username={x.user.username}
                        createdAt={x.createdAt}
                        content={x.content}
                        picture={x.user.image.png}
                        score={x.score}
                        replyingTo={x.replyingTo}
                        currentusername={props.currentusername}
                        currentuserpic={props.currentuserpic}
                        replyToReply={replyToReply}
                        setReplyToReply={setReplyToReply}
                    ></Replies>

                    
               </>
            ))

            
        }
        {
            replyToReply? 
            <>
              <div className="h-full col-start-1 col-end-2 w-5 border-solid border-l border-l-gray-600 lg:col-start-4 lg:col-end-5" ></div>
              <Ownreply replyToReply={replyToReply} currentuserpic={props.currentuserpic} />
            </> : ""
        }
    </>
  )
}

export default comments