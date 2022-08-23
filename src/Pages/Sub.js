
import {useParams} from "react-router-dom";

const Sub = () => {
    const params = useParams();

    return (
        <div>
            <p> Sub A - B </p>
            <p> {Number(params.A) - Number(params.B)} </p>
        </div>
    );
}

export default Sub;