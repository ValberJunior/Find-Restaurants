import { Address, Restaurant, RestaurantInfo, RestaurantPoster, Title } from "./style";
import ReactStars from "react-rating-stars-component"; 
import restaurantImg from '../../assets/restaurant.png';

export const RestaurantCard = ()=>{
    return(
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do Restaurante</Title>
                <ReactStars count={5} isHalf value={4} edit={false} activeColor='#e7711c'/>
                <Address>Rua Rio de Janeiro, 120</Address>
            </RestaurantInfo>
            <RestaurantPoster src={restaurantImg} alt='Restaurant Image'/>
        </Restaurant>
    );
}