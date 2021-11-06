import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
    margin: 40px;

    .container {
        margin-top: 30px;
    }
`;

export const StyledButton = styled(IconButton)`
    position: relative;
    z-index: 100;
`;

