import { useState } from 'react'
import './App.css'
import FormulaScreen from './FormulaScreen'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'

function App() {
  const [formula, setFormula] = useState("")
  const [operand, setOperand] = useState("")

  return (
    <div id="calculator">
      <FormulaScreen formula={formula} />
      <OutputScreen operand={operand} formula={formula} />
      <Buttons formula={formula} setFormula={setFormula} setOperand={setOperand} />
    </div>
  )
}

export default App
