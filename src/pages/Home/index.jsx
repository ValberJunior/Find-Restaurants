import React from "react";
import { Carousel, CarouselTitle, Container, Logo, Search, Wrapper } from "./style";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from '@material/react-material-icon';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurant.png';
import { Card, Modal, RestaurantCard, Map } from "../../components";




export const Home = ()=>{

    const [inputValue, setInputValue] = useState('');
    const [modalOpenned, setModalOpenned] = useState(false);

    //carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return(
        <Wrapper>
            <Container>
                <Search><Logo src={logo} alt='Logo da Página'/>

                    <TextField
                    label='Pesquisar Restaurantes'
                    outlined
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                    value={inputValue}
                    onChange={(e)=>{setInputValue(e.target.value)}} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurant} title='Nome do Restaurante'/>
                        <Card photo={restaurant} title='Nome do Restaurante'/>
                        <Card photo={restaurant} title='Nome do Restaurante'/>
                        <Card photo={restaurant} title='Nome do Restaurante'/>
                        <Card photo={restaurant} title='Nome do Restaurante'/>
                        <Card photo={restaurant} title='Nome do Restaurante'/>
                    </Carousel>
                </Search>
                <RestaurantCard/>
            </Container>
            <Map/>
            <Modal open={modalOpenned} onClose={()=>setModalOpenned(!modalOpenned)} />
        </Wrapper>
    )
}
