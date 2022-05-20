import React from 'react';
import formCss from './form.module.css';
import {Button} from 'react-bootstrap';

function FormAdd() {




    return ( 
        <section className={formCss.wrapper}>
            <h1 className={formCss.title}>Adicionar Livro</h1>
           <div>
               <form className={formCss.form} action="">
                    <div>
                        <label htmlFor="title"> Título </label>
                        <input type="text" id="title" />
                    </div>
                    <div>
                        <label htmlFor="img"> Imagem </label>
                        <input type="text" id="img" />
                    </div>
                    <div>
                        <label htmlFor="price"> Preço </label>
                        <input type="text" id="price" />
                    </div>
                    <div>
                        <label htmlFor="url"> URL </label>
                        <input type="text" id="url" />
                    </div>
                    <Button className={formCss.btn} variant="danger">Adicionar</Button>
               </form>
           </div>
        </section>
     );
}

export default FormAdd;