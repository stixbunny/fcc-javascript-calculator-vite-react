import { useState } from 'react'
import './App.css'
import FormulaScreen from './FormulaScreen'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'

function App() {
  const [formula, setFormula] = useState("")
  const [operand, setOperand] = useState("")
  const [result, setResult] = useState("")

  return (
    <>
      <div id="calculator">
        <FormulaScreen formula={formula} />
        <OutputScreen operand={operand} formula={formula} result={result} />
        <Buttons formula={formula} setFormula={setFormula} setOperand={setOperand} setResult={setResult} result={result} operand={operand}/>
      </div>
      <div id="me">
        by <a href="https://github.com/stixbunny" target="_blank" rel="noreferrer">stixbunny</a>
      </div>
    </>
  )
}

export default App
