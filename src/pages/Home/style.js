import styled from "styled-components";


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