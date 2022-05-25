import React from 'react';
import FormBooks from '../../components/Form/Form'
import { useParams } from 'react-router-dom';


function Form() {

    const { id } = useParams();

    return ( 
        <>
            <FormBooks id={id ? Number.parseInt(id, 10) : null}/>
        </>
     );
}

export default Form;