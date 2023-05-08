import Button from "./Button"
import { evaluate } from "mathjs"
import PropTypes from 'prop-types'

function Buttons({formula, setFormula, setOperand}) {
    const handleClick = (operand) => {
        setOperand(operand)
        if(operand == "AC") {
            setFormula("")
        }
        else if(operand == "=") {
            const result = evaluate(formula).toString()
            console.log(formula + "=" + result)
            setFormula((prev) => prev + "=" + result)
        }
        else {
            setFormula((prev) => prev + operand)
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
            <Button id={"substract"} operand={"-"} handleClick={handleClick} />
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
    setOperand: PropTypes.func.isRequired
}

export default Buttons