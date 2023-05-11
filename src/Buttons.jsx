import Button from "./Button"
import { evaluate } from "mathjs"
import PropTypes from 'prop-types'

function Buttons({formula, setFormula, setOperand, setResult, result, operand}) {
    const mathSymbolSet = new Set(["+", "-", "/", "*", ".", "="])
    const mathOperatorSet = new Set(["+", "-", "/", "*"])
    const handleClick = (newOperand) => {
        if(mathSymbolSet.has(operand) && operand == newOperand) return
        else if(mathOperatorSet.has(operand) && mathOperatorSet.has(newOperand)) {
            if(newOperand == "-") setFormula((prev) => prev + newOperand)
            else {
                let counter = -1
                while (mathOperatorSet.has(formula.slice(counter - 1, counter))) {
                    counter--
                }
                setFormula((prev) => prev.slice(0, counter) + newOperand)
            } 
        }
        else {
            setOperand(newOperand)
            if(newOperand == "AC") {
                setFormula("")
                setResult("")
                setOperand("0")
            }
            else if(newOperand == "=") {
                const res = evaluate(formula).toString()
                setResult(res)
                console.log(formula + "=" + res)
                setFormula((prev) => prev + "=" + res)
            }
            else if((newOperand == "+" ||
                    newOperand == "-" ||
                    newOperand == "/" ||
                    newOperand == "*") &&
                    result != "") {
                const res = result + newOperand
                setFormula(res)
                setResult("")
            }
            else {
                setFormula((prev) => prev + newOperand)
            }
        }
    }
    return (
        <div className="buttons">
            <Button id={"clear"} operand={"AC"} handleClick={handleClick} />
            <Button id={"divide"} operand={"/"} handleClick={handleClick} />
            <Button id={"multiply"} operand={"*"} handleClick={handleClick} />
            <Button id={"seven"} operand={"7"} handleClick={handleClick} />
            <Button id={"eight"} operand={"8"} handleClick={handleClick} />
            <Button id={"nine"} operand={"9"} handleClick={handleClick} />
            <Button id={"subtract"} operand={"-"} handleClick={handleClick} />
            <Button id={"four"} operand={"4"} handleClick={handleClick} />
            <Button id={"five"} operand={"5"} handleClick={handleClick} />
            <Button id={"six"} operand={"6"} handleClick={handleClick} />
            <Button id={"add"} operand={"+"} handleClick={handleClick} />
            <Button id={"one"} operand={"1"} handleClick={handleClick} />
            <Button id={"two"} operand={"2"} handleClick={handleClick} />
            <Button id={"three"} operand={"3"} handleClick={handleClick} />
            <Button id={"equals"} operand={"="} handleClick={handleClick} />
            <Button id={"zero"} operand={"0"} handleClick={handleClick} />
            <Button id={"decimal"} operand={"."} handleClick={handleClick} />
        </div>
    )
}

Buttons.propTypes = {
    formula: PropTypes.string.isRequired,
    setFormula: PropTypes.func.isRequired,
    setOperand: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired,
    result: PropTypes.string.isRequired,
    operand: PropTypes.string.isRequired
}

export default Buttons