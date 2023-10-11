import { useCallback, useState, useEffect, useRef } from "react"

function App() {
  const passwordRef = useRef(null);
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
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, getnumber, character, setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password)
  },[password])

  
  useEffect(()=>{
    passwordGenerator()
  },[length, getnumber, character,passwordGenerator])

  return (
    <div>
      <div className="w-full max-w-lg m-auto shadow-md bg-gray-700 text-lime-500 rounded-md px-5 p-10 text-2xl font-mono">
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>

        <div className="flex overflow-hidden rounded-md shadow my-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClip} className="text-white bg-lime-500 p-2 hover:bg-lime-400">Copy</button>
        </div>

        <div className="flex text-xl gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
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
