import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeebackStats() {
    const {feedback} = useContext(FeedbackContext);

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

export default FeebackStats;