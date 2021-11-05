import styled from "styled-components";

export const Wrapper = styled.div`
    .navbar {
        position: absolute;
        left: 0%;
        top: 0%;
        right: auto;
        bottom: auto;
        width: 100%;
        height: 70px;
        padding-right: 8%;
        padding-left: 8%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background: #38C2DE;
    }

    .brand {
        width: 100px;
        height: 60px;
    }

    .brand-img {
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain; 
    }
`;