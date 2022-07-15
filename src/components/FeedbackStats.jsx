import PropTypes from "prop-types";

function FeebackStats({feedback}) {
    let average = feedback.reduce((sum, item) => {
        sum += item.rating;
        return sum
    }, 0) / feedback.length
    
    average = average.toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeebackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeebackStats;