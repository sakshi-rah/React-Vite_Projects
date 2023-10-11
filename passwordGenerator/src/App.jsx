import { useCallback, useState, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [getnumber, setGetnumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqstuvwxyz";

    if (getnumber) str += "0123456789";
    if (character) str += "!@#$%^&*(){}~`[]=+-";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char);
    }
    setPassword(pass)

  }, [length, getnumber, character, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, getnumber, character,passwordGenerator])

  return (
    <div>
      <div className="w-full max-w-lg m-auto shadow-md bg-gray-700 text-lime-600 rounded-md px-3 p-3 text-2xl font-mono">
        <h1 className='text-4xl text-center text-white py-2'>Password Generator</h1>

        <div className="flex overflow-hidden rounded-md shadow mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="text-white bg-lime-600 p-2">Copy</button>
        </div>

        <div className="flex text-xl gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={getnumber}
            id="numberInput"
            onChange={()=>{setGetnumber((prev)=>!prev)}}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={()=>{setCharacter((prev)=>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
