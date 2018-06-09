import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, click, index }) => (

    <div className={`card ${feedback}`} onClick={() => click(index)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div >
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMissmatched'
    ]),
    index: PropTypes.number.isRequired
}
export default Card

