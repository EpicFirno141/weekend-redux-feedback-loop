import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function StepThree() {
    const dispatch = useDispatch();
    const history = useHistory();
    const support = useSelector(store => store.support);

    const submitSupport = (event) => {
        event.preventDefault();
        dispatch({type: 'SET_SUPPORT', payload: event.target.firstElementChild.value});
        if(support !== 0){
            history.push('/stepfour');
        }
    }

    return(
        <div>
            <h3>How well are you being supported? (0-5)</h3>
            <form onSubmit={submitSupport}>
                <input id='support' type='number' min="1" max="5" />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default StepThree;