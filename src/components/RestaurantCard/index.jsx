import { Address, Restaurant, RestaurantInfo, RestaurantPoster, Title } from "./style";
import ReactStars from "react-rating-stars-component"; 
import restaurantImg from '../../assets/restaurant.png';

export const RestaurantCard = ({ restaurant , onClick })=>{
    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{ restaurant.name }</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor='#e7711c'/>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPoster src={restaurant.photos? restaurant.photos[0].getUrl() : RestaurantPoster } alt='Restaurant Image'/>
        </Restaurant>
    );
}