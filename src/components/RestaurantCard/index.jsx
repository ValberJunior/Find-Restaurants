import { Address, Restaurant, RestaurantInfo, RestaurantPoster, Title } from "./style";
import ReactStars from "react-rating-stars-component"; 
import restaurantImg from '../../assets/restaurant.png';
import { useState } from "react";
import Skeleton from '../Skeleton';

export const RestaurantCard = ({ restaurant , onClick })=>{

    const [imageLoaded, setImageLoaded] = useState(false);


    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{ restaurant.name }</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor='#e7711c'/>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPoster 
            imageLoaded={imageLoaded}
            src={restaurant.photos? restaurant.photos[0].getUrl() : restaurantImg } 
            alt='Restaurant Image'
            onload={()=>setImageLoaded(true)}/>
            {!imageLoaded && <Skeleton width='100px' heigth='100px'/>}
        </Restaurant>
    );
};