import { useEffect } from "react"
import { useState } from "react"
import PropTypes from 'prop-types'

function OutputScreen({operand, formula, result}) {
    const [output, setOutput] = useState("")
    useEffect(() => {
        if(formula == "") {
            setOutput("")
        }
    }, [formula])
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