import PropTypes from 'prop-types'

function Button({id, operand, handleClick}) {
    return (
        <button id={id} onClick={e => handleClick(operand)}>{operand}</button>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    operand: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Button