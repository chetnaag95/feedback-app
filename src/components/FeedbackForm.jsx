import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')


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

        handleAdd(newObject)
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