import { useState } from 'react'


function App() {
  const [color, setColor] = useState("light");
  const [text, setText] = useState("Background Light");
  return (
    <div className='w-full h-screen duration-200 p-5' style={{ backgroundColor: color }}>

      <div className='container m-auto p-4 rounded-xl bg-fuchsia-400 flex flex-wrap justify-around'>
        <button className='bg-teal-300 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("aqua"); setText("Background Aqua")}}>Aqua</button>
        <button className='bg-red-500 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("red"); setText("Background Red")}}>Red</button>
        <button className='bg-green-600 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("green"); setText("Background Green")}}>Green</button>
        <button className='bg-pink-300 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("pink"); setText("Background Pink")}}>Pink</button>
        <button className='bg-yellow-400 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("yellow"); setText("Background Yellow")}}>Yellow</button>
        <button className='bg-blue-600 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("blue"); setText("Background Purple")}}>Purple</button>
        <button className='bg-orange-400 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("orange"); setText("Background Orange")}}>Orange</button>
        <button className='bg-lime-400 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("yellowgreen"); setText("Background Emerald")}}>Emerald</button>
        <button className='bg-zinc-500 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("gray"); setText("Background Gray")}}>Gray</button>
        <button className='bg-rose-700 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("brown"); setText("Background Brown")}}>Brown</button>
        <button className='bg-zinc-950 p-2 shadow-lg rounded-lg text-xl text-white font-semibold' onClick={() => {setColor("black"); setText("Background Dark")}}>Dark</button>

      </div>

      <div className='text-center text-4xl font-bold m-5 font-serif text-slate-500'>
        <h1>{text}</h1>
      </div>

    </div>
  )
}

export default App
