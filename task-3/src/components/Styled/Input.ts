import styled from "styled-components";
import colors from "Assets/colors";

const Input = styled.input`
    display: block;
    width: 100%;
    height: 3.75rem;
    border: 0.1rem solid ${colors.lightGray};
    padding: 1rem;
    border-radius: .5rem;
    font-size: 1rem;
`;

export default Input;