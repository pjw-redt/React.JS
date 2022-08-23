import {useParams} from "react-router-dom";

const Sum = () => {
    const params = useParams();

    return (
        <div>
            <p> Sum A + B </p>
            <p> {Number(params.A) + Number(params.B)} </p>
        </div>
    );
}

export default Sum;