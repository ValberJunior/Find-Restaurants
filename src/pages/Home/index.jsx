import { useState } from "react";
import { useSelector } from "react-redux";
import { Carousel, CarouselTitle, Container, Logo, ModalContent, ModalTitle, Search, Wrapper } from "./style";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from '@material/react-material-icon';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


import logo from '../../assets/logo.svg';
import restaurantImg from '../../assets/restaurant.png';
import { Card, Modal, RestaurantCard, Map , Loader } from "../../components";





export const Home = ()=>{

    const [inputValue, setInputValue] = useState('');
    const [query, setQuery]= useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpenned, setModalOpenned] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state)=>state.restaurants);

    //carousel
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
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

    //modal
    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpenned(true);
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
                    {restaurants.lenght > 0 ?
                    (<>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant)=>{<Card key={restaurant.place_id} photo={photos ? restaurant.photos[0].getUrl() : restaurantImg} title={restaurant.name} />})}
                    </Carousel>
                    </>) : (<Loader/>)}
                </Search>
                {restaurants.map((restaurant)=>(
                <RestaurantCard onCLick={()=>handleOpenModal(restaurant.place_id)} restaurant={restaurant}/>
                ))}
                <RestaurantCard/>
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpenned} onClose={()=>setModalOpenned(!modalOpenned)}>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_adress}</ModalContent>
            <ModalContent>{restaurantSelected?.opening_hours?.open_now?'Aberto Agora :)':
            'Fechado Agora :('}</ModalContent>
            </Modal>
        </Wrapper>
    )
}
