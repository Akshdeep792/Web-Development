import styled from 'styled-components';


export const StyledButton = styled.button`
border: 2px solid #4caf50;
padding : 30px 40px;
font-size: 40px;
background-color: ${(props) => props.variant === 'outline' ? '#FFF' : '#4caf50'};
color: ${(props) => props.variant === 'outline' ? '#4caf50' : '#FFF'};
&:hover {
    background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
color: ${(props) => props.variant !== 'outline' ? '#4caf50' : '#FFF'};
}
`

