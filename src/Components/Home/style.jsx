import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  
  width: 100vw;   
  padding: 0;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

export const Section = styled.section`
  position: relative; 
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100%;       
  
`;


export const Copo = styled.img`
  position: absolute;
  width: 35vw;  
  max-width: 450px; 
  height: auto;
  z-index: 2;    
  transition: transform 0.3s ease;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 20px;                
  list-style: none;         
  margin-top: 40px;         
  padding: 0;
  cursor: pointer;
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
width: 12vw;
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