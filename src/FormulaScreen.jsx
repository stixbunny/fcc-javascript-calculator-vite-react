import PropTypes from 'prop-types'
function FormulaScreen({formula}) {
    return (
        <div id="formula">{formula}</div>
    )
}

FormulaScreen.propTypes = {
    formula: PropTypes.string.isRequired
}

export default FormulaScreen