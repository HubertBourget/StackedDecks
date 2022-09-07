import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-white: white;
    }
    *, *::after, *::before, h1:is(h1){
    margin:0;
    padding:0;
    box-sizing: border-box;
    
}
body {
    padding: 0;
    margin: 0;
    background-color: black;
}
root{
    padding: 0;
    margin: 0;
    background-color: #DCE6F2;
}
h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} //'Courier New', Courier, monospace;
button{
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
}
`;