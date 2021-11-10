import { useState } from "react";
import { useSelector } from "react-redux";
import { Carousel, CarouselTitle, Container, Logo, Search, Wrapper } from "./style";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from '@material/react-material-icon';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


import logo from '../../assets/logo.svg';
import restaurantImg from '../../assets/restaurant.png';
import { Card, Modal, RestaurantCard, Map } from "../../components";





export const Home = ()=>{

    const [inputValue, setInputValue] = useState('');
    const [query, setQuery]= useState(null);
    const [modalOpenned, setModalOpenned] = useState(false);
    const { restaurants } = useSelector((state)=>state.restaurants);

    //carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    //searchBar
    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

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
                    onKeyPress={handleKeyPress}
                    onChange={(e)=>{setInputValue(e.target.value)}} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant)=><Card key={restaurant.place_id} photo={photos ? restaurant.photos[0].getUrl() : restaurantImg} title={restaurant.name} />)}
                    </Carousel>
                </Search>
                {restaurants.map((restaurant)=>(
                <RestaurantCard restaurant={restaurant}/>
                ))}
                <RestaurantCard/>
            </Container>
            <Map query={query}/>
            <Modal open={modalOpenned} onClose={()=>setModalOpenned(!modalOpenned)} />
        </Wrapper>
    )
}
