import { useEffect } from "react"
import { useState } from "react"
import PropTypes from 'prop-types'

function OutputScreen({operand, formula}) {
    const [output, setOutput] = useState("")
    useEffect(() => {
        if(formula.slice(-1) == operand) {
            setOutput(operand)
        }
        else {
            setOutput((prev) => prev + formula.slice(-1))
        }
    }, [formula, operand])
    
    return (
        <div id="display">{output}</div>
    )
}

OutputScreen.propTypes = {
    operand: PropTypes.string.isRequired,
    formula: PropTypes.string.isRequired
}

export default OutputScreen