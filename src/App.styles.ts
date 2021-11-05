import styled, {createGlobalStyle} from "styled-components";
import IconButton  from "@material-ui/core/IconButton";

const GlobalStyle = createGlobalStyle `

`
export const Wrapper = styled.div`
    // margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    position: relative;
    z-index: 100;
    right: 20px;
    top: 20px;
`;