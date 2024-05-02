import PropTypes from 'prop-types';
import './Card.css'
export default function Card(props){
    if(props.name === '')
    {
        return(
            <>

            </>
        )
    }
    return(
        <>
        <div className='card'>
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.bio}</p>
        </div>
        </>
    )    
}
Card.propType = {
    name: PropTypes.string,
    surname: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    serh: PropTypes.string,
}
 