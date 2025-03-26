import styled from "styled-components";
import Chapter01 from "./Chpater01";


export const StyledP = styled.p`
        background-color : rgb(251, 148, 148);
        width: 500px;
        height : 200px;
        border : 1px dotted rgb(97, 16, 16);

        &:hover {
        pointer-events : cursor;
        background-color: lightpink;
        }
    `;

export const StyledBlueP = styled.p`

        background-color : rgb(241, 12,16);
        &:hover{
            pointer-events : cursor;
            background-color: green;
        }
`;

