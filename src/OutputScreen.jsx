import { useEffect } from "react"
import { useState } from "react"
import PropTypes from 'prop-types'

function OutputScreen({operand, formula, result}) {
    const [output, setOutput] = useState("0")
    useEffect(() => {
        if(result != "") {
            setOutput(result)
        }
        else if(formula.slice(-1) == "AC" ||
                formula.slice(-1) == "=" ||
                formula.slice(-1) == "+" ||
                formula.slice(-1) == "-" ||
                formula.slice(-1) == "/" ||
                formula.slice(-1) == "*") {
            setOutput(operand)
        }
        else if(formula == "") {
            setOutput("0")
        }
        else if(formula.length == 1){
            setOutput(formula)
        }
        else if(output == 0 && operand == 0) return
        else if(output.includes(".") && operand == ".") return
        else {
            setOutput((prev) => prev + formula.slice(-1))
        }
    }, [formula, operand, result])
    return (
        <div id="display">{output}</div>
    )
}

OutputScreen.propTypes = {
    operand: PropTypes.string.isRequired,
    formula: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
}

export default OutputScreen