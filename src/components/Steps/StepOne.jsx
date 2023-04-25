import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function StepOne() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);

    const submitFeeling = (event) => {
        event.preventDefault();
        dispatch({type: 'SET_FEELING', payload: event.target.firstElementChild.value});
        if(feeling !== 0){
            history.push('/steptwo');
        }
    }

    return(
        <div>
            <h3>How are you feeling today? (0-5)</h3>
            <form onSubmit={submitFeeling}>
                <input id='feeling' type='number' min="1" max="5" />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default StepOne;