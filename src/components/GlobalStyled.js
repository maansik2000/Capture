import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    html{
        @media (max-width : 1380px){
            font-size: 80%;
        }
        @media (max-width : 1080px){
            
        }
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        border: 3px solid #23d997;
        background: transparent;
        color: white ;
        padding: 1rem 2rem;
        transition:  all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 3.5rem;
    }
    h3{
        color: white;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:  #23d997;
    }
    h4{
        font-weight: bold;
 
    }
    p{
        padding: 2rem 0rem;
        color: #ccc;
        font-size:1rem ;
        line-height: 150%;
    }
`;

export default GlobalStyle;
