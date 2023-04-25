import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function StepFour() {
    const dispatch = useDispatch();
    const history = useHistory();
    const comments = useSelector(store => store.comments);

    const submitComments = (event) => {
        event.preventDefault();
        dispatch({type: 'SET_COMMENTS', payload: event.target.firstElementChild.value});
        if(comments !== ''){
            history.push('/review');
        }
    }

    return(
        <div>
            <h3>How well are you being supported? (0-5)</h3>
            <form onSubmit={submitComments}>
                <input id='comments' type='text' />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default StepFour;