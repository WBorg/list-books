

import React, { useEffect, useState} from 'react';
import searchCss from './search.module.css'
import axios from 'axios';
import Books from '../../components/Books/Books';

function SearchBooks() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( ()=>{

      const params = {};
      if(search){
        params.title_like = search;
      }

      axios.get('http://localhost:3004/books', {params})
      .then(
        (response) => {
        console.log(response.data);
        setBooks(response.data);
        }
      );

    }, [search] );
    
    
    
    
    
    return ( 
        <>
         <header className={searchCss.promotionSearchHeader}>
              <h1>Pesquisa de Livros</h1>
          </header>
          <input type="search"
                  className={searchCss.promotionSearchInput}
                  placeholder="Buscar"
                  value={search}
                  onChange={(ev) => setSearch(ev.target.value)}

          />
              
            {books.map( (books) => (
            <Books books={books} key={books.title} /> 
            )
            )
          }

        
        
        </>




     );
}

export default SearchBooks;