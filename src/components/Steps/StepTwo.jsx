import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function StepTwo() {
    const dispatch = useDispatch();
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);

    const submitUnderstanding = (event) => {
        event.preventDefault();
        dispatch({type: 'SET_UNDERSTANDING', payload: event.target.firstElementChild.value});
        if(understanding !== 0){
            history.push('/stepthree');
        }
    }

    return(
        <div>
            <h3>How well are you understanding the content? (0-5)</h3>
            <form onSubmit={submitUnderstanding}>
                <input id='understanding' type='number' min="1" max="5" />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default StepTwo;