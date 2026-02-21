import React from "react"
import { Button } from "./components/ui/button"   // make sure shadcn installed

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Tailwind Working
      </h1>

      <button className="bg-red-500" variant="ghost">
       Click me
      </button>
    </div>
  )
}

export default App
