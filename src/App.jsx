import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comments from './components/comments.jsx'
import Data from './data.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='grid grid-cols-12 gap-y-5 place-items-center h-auto p-4 lg:py-12'>
            { 
               
               Object.values(Data.comments).map((x,i)=> (
                <Comments
                  username={x.user.username}
                  createdAt={x.createdAt}
                  content={x.content}
                  picture={x.user.image.png}
                  score={x.score}
                  replies={x.replies}
                  currentusername={Data.currentUser.username}
                  currentuserpic={Data.currentUser.image.png}
                ></Comments>
          ))}

          <div className='p-4 bg-white col-start-1 col-end-13 w-full rounded-md lg:col-start-4 lg:col-end-10'> 
                <form action="#"  className='grid grid-cols-2 gap-y-4 items-center lg:grid-cols-[auto_1fr_auto] lg:gap-x-5'>
                  <textarea name="" id="" cols="30" rows="3" className='col-start-1 col-end-3 border rounded-md w-full p-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 '  placeholder='Add a comment...'></textarea>

                  <img className='w-8 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:self-start' src={Data.currentUser.image.png} alt="" />

                  <button className='text-white self-center justify-self-end bg-ModerateBlue focus:bg-ModerateBlue2 px-6 py-2 rounded-md font-bold lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:self-start'>SEND</button>
                </form>
                
          </div>
    </div>
  )
}

export default App
