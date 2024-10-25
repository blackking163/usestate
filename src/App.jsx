import React from 'react'
import './App.css'

import { useState } from 'react'

const App = () => {

    const [num,setNum] = useState(0.)
    const [text, setText]=useState('')
    const [img,setImg] = useState(false)
    const [open, setOpen] = useState('ОТКРЫТЬ')


    const change = () => {
      setImg(!img)
      setOpen(img ? 'ОТКРЫТЬ' : 'ЗАКРЫТЬ')
    }

   

    console.log(num);




  return (
    <>

      <div className="box">
        <button onClick={change}>ОТКРЫТЬ ФОТО</button>
        {img && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaY8jVElP0vvQ4bxk2Pd5iXJvwfu9R9SMzA&s" alt="" /> }
      </div>




      <div className="box"> 
        <h4>{text}</h4>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className="box">
        <h4>{num}</h4>
        <button onClick={() => setNum(num + 1)}>Добавить число</button>
        <button onClick={() => setNum(num - 1)}>Уменьшить число</button>
        <button onClick={() => setNum(num * 2)}>Удвоить число</button>
        <button onClick={() => setNum(num / 2)}>Разделить число</button>
        <button onClick={() => setNum(num * 0)}>Обнулить число</button>
      </div>

    </>
  )
}

export default App