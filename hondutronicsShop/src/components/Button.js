import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size:1.05rem;
background: ${props => props.cart ? "var(--mainDiff)" : "var(--mainBlue)"};
border:0.1rem solid var(--mainBlue);
border-color: ${props => props.cart ? "var(--mainDiff)" : "var(--mainBlue)"};
color: #FFF;
border-radius: 2rem;
padding: 0.5rem 0.8rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: transparent; 
    color: ${props => props.cart ? "var(--mainDiff)" : "var(--mainBlue)"};  
}
&:focus {
    outline: none;
}
`;