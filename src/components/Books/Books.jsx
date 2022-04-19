import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

const ItemContainer = styled.div`

border-radius: 4px;
background-color: #ccc;
height: 140px;
width: 262px;
color: #29303b;
margin-bottom: 10px;
margin-right: 10px;
padding: 10px;

`
const TitlePane = styled.div`
    font-weight: 700px;
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



const Books = ( {books} ) =>{

    return(

        <ItemLink href={books.url} title="Clique para comprar">
            <ItemContainer>
                <Thumbnail src={books.image}></Thumbnail>
                <TitlePane>{books.title}</TitlePane>
                <PricePane>R$ {books.price}</PricePane>
                <Button variant="primary">Comprar</Button>
            </ItemContainer>
        </ItemLink>





    )

}

export default Books;