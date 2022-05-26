import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import booksCss from './books.module.css';
import {Link} from 'react-router-dom';
import {Trash} from 'phosphor-react';

const ItemContainer = styled.div`

border-radius: 4px;
background-color: #cca;
height: 140px;
width: 295px;
color: #29303b;
margin-bottom: 10px;
margin-top: 10px;
margin-right: 10px;
padding: 10px;
display: inline-block;
position: relative;



`
const TitlePane = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    


`
const PricePane = styled.div`
    margin-bottom: 5px;
`
const Thumbnail = styled.img`
    width: auto;
    height: 100%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;

`
const ItemLink = styled.a`
    text-decoration: none;
    
    `



const Books = ( {books, onClickDelete } ) =>{
   


    return(

            <ItemContainer>
                <Thumbnail src={books.image}></Thumbnail>
                <TitlePane>{books.title.substring(0,26)}...</TitlePane>
                <PricePane>R$ {books.price}</PricePane>
                <ItemLink href={books.url} title="Clique para comprar" target="_blank">
                    <Button variant="primary">Comprar</Button>
                </ItemLink>
                <Button className={booksCss.btnEditar}
                    variant="secondary">
                    <Link 
                         className={booksCss.btnEdit} 
                         to={`/edit/${books.id}`}>Editar
                    </Link>
                </Button>
                <button type="button" 
                        className={booksCss.booksButtonDelete}
                        onClick={onClickDelete}>
                <Trash size={16} color="#ff0000" weight="duotone" />
                </button>
            </ItemContainer>







    )

}

export default Books;