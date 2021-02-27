import styled from "styled-components";
import colors from "Assets/colors";

interface LabelProps {
    marginBottom?: string | null;
}

const Label = styled.label<LabelProps>`
    display: inline-block;
    color: ${colors.black};
    margin-bottom: ${({ marginBottom = ".75rem" }) => marginBottom};
    font-size: 2.5rem;
`;

export default Label;
