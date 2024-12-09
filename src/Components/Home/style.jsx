import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  justify-content: center;   
  align-items: center;       
  height: 80vh;             
  padding: 0 20px;
  text-align: center;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;       
  justify-content: center; 
  width: 100%;          
`;

// Estilo para o copo
export const Copo = styled.img`
  position: absolute;
  width: 450px;  // Ajusta o tamanho do copo
  height: auto;
  z-index: 1;    // Garante que o copo fique em cima do fundo
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;  
  gap: 20px;                
  list-style: none;         
  margin-top: 20px;         
  padding: 0;
`;


export const Button = styled.button`
background-color: #037143;
color: white;
border: none;
padding: 10px 35px;
border-radius: 20px;
font-size: 1.2rem;
cursor: pointer;
margin: 20px;
`;


export const H2= styled.h2`
font-size: 4rem;
font-family: "Poppins", sans-serif;
font-weight: 300;
width: 36vw;
margin: 20px 55px;
height: 23vh;
`;

export const Span = styled.span`
color: #037143;
font-weight: 800;
`;

export const P = styled.p`
font-family: "Poppins", sans-serif;
font-weight: 400;
margin: 0 55px;
width: 39vw;
height: 14vh;
`;