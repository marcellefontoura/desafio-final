import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin: 40px;

`;

export const StyleLink = styled(Link)`
text-decoration: none;
color: #1E3932;

&:hover{
    color: #14764e;

}
`;

export const Ul = styled.ul`
display: flex;
font-family: "Poppins", sans-serif;
width: 40vw;
justify-content: space-around;
list-style: none;
`;

export const Li = styled.li`
font-weight: 400;
font-size: 1rem;
`;