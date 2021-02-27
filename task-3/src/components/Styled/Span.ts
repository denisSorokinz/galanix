import styled from "styled-components";
import colors from "Assets/colors";

interface SpanProps {
    fontSize?: string;
    color?: string;
    isBold?: boolean;
}

const Span = styled.span<SpanProps>`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
    color: ${({ color }) => (color ? color : colors.aquamarine)};
    font-weight: ${({ isBold }) => (isBold ? 700 : 300)};
    word-break: break-all;
`;

export default Span;
