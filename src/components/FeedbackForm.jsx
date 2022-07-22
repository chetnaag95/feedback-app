import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState(''),
          [btnDisabled, setBtnDisabled] = useState(true),
          [message, setMessage] = useState(''),
          [rating, setRating] = useState(''),
          { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    
    useEffect(() => {
        if(feedbackEdit.edit) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !== '' && text.length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 characters');
        }else {
            setBtnDisabled(false);
            setMessage('')
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newObject = {
            text,
            rating
        }
        if(feedbackEdit.edit) {
            updateFeedback(feedbackEdit.item.id, newObject)
        }else {
            addFeedback(newObject)
        }
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;