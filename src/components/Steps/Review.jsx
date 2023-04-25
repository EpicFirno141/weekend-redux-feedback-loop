import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Review() {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const [submitted, setSubmitted] = useState(false);

    const submitInfo = () => {
        const completeForm = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
        axios.post('/api/form', completeForm).then((response) => {
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong.');
        });
        setSubmitted(true);
    }

    const backForm = () => {
        history.push('/');
    }

    if(submitted === false){
        return(
            <div>
                <h3>Review</h3>
                <p>Feeling: {feeling}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
                <button onClick={submitInfo}>Submit Form</button>
            </div>
        );
    } else {
        return(
            <div>
                <h3>Submitted!</h3>
                <button onClick={backForm}>Return to Start</button>
            </div>
        )
    }
    
}

export default Review;