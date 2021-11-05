import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;

    button {
        border: 1px solid #AEAEAE;
        color: #38C2DE;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;