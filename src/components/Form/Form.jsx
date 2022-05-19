import React from 'react';
import formCss from './form.module.css';

function FormAdd() {




    return ( 
        <>
            <h1 className={formCss.title}>Adicionar Livro</h1>
           <div>
               <form className={formCss.form} action="">
                    <div>
                        <label htmlFor="title"> Título: </label>
                        <input type="text" id="title" />
                    </div>
                    <div>
                        <label htmlFor="img"> Imagem: </label>
                        <input type="text" id="img" />
                    </div>
                    <div>
                        <label htmlFor="price"> Preço: </label>
                        <input type="text" id="price" />
                    </div>
                    <div>
                        <label htmlFor="url"> URL: </label>
                        <input type="text" id="url" />
                    </div>
               </form>
           </div>
        </>
     );
}

export default FormAdd;