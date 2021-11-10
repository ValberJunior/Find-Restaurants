import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;


export const Container = styled.aside`
background-color: ${(props)=>props.theme.color.background};
width: 360px;
height: 100vh;
overflow-y: auto;
`;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

padding: 20px;

`;

export const Logo = styled.img`
margin-bottom: 15px;
`;

// export const Map = styled.div`
// background-color: red;
// width: 500px;
// `;

export const Carousel = styled(Slider)`
.slick-slide{
    margin-right: 30px;
}
`;

export const CarouselTitle = styled.h1`
 font-family: ${(props)=>props.theme.font.regular};
 color: ${(props)=>props.theme.color.text};
 font-size: 24px;
 font-weight: bold;
 line-height: 29px;
 margin: 16px 0px;
 align-self: flex-start;
`;

export const ModalTitle = styled.p`
margin-bottom: 10px;
letter-spacing: 0.11px;
font-family: ${(props)=>props.theme.font.regular};
color: ${(props)=>props.theme.color.text};
line-height: 29px;
font-size: 24px;
font-weight: bold;
`;

export const ModalContent = styled.p`
margin-bottom: 10px;
font-family: ${(props)=>props.theme.font.regular};
color: ${(props)=>props.theme.color.text};
line-height: 19px;
font-size: 16px;
font-weight: normal;
`;

