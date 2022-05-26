import formCss from './form.module.css';
import {Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const initialValue = {
    title: '',
    url: '',
    image: '',
    price: 0,
  }

  const Form = ( {id}) =>{
    

    const [values, setValues] = useState(initialValue);
    const [acao, setAcao] = useState('Novo');
    const navigate = useNavigate();

    useEffect(() => {

        if (id) {
          const getSearch = async () =>{
            try{
             const books = await  axios.get(`http://localhost:3004/books/${id}`)
                            // .then((response) => {
                              setValues(books.data);
                              setAcao('Editar');
                              console.log(books.data);
                            // })
            }catch(error){
              console.log(error);
            }


          }
          getSearch();
        }
      }, []);

      function onSubmit(ev) {
        ev.preventDefault(); //não execute o comportamento default do form
    
        const method = id ? 'put' : 'post';
        const url = id
          ? `http://localhost:3004/books/${id}`
          : 'http://localhost:3004/books'
    
        axios[method](url, values)
          .then((response) => {
            navigate('/');
          });


    }
    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
      }

    return ( 
        <section className={formCss.wrapper}>
                <div>
                    <h1>Books</h1>
                    <h2>{acao} Livro</h2>
                </div>
               <form className={formCss.form} onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="title"> Título </label>
                        <input type="text" name="title" id="title" onChange={onChange} value={values.title} />
                    </div>
                    <div>
                        <label htmlFor="image"> Imagem </label>
                        <input type="text" name="image" id="image" onChange={onChange} value={values.image} />
                    </div>
                    <div>
                        <label htmlFor="price"> Preço </label>
                        <input type="text" name="price" id="price" onChange={onChange} value={values.price} />
                    </div>
                    <div>
                        <label htmlFor="url"> URL </label>
                        <input type="text" name="url" id="url" onChange={onChange} value={values.url} />
                    </div>
                    
                     <Button className={formCss.btnCancelar} type="button" variant="dark" onClick={()=>navigate('/')}>Cancelar</Button>
                     <Button className={formCss.btnSalvar} type="submit" variant="danger">Salvar</Button>

                    
               </form>
           
        </section>
     );
}

export default Form;