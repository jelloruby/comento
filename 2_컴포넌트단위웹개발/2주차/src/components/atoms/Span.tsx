import styled from 'styled-components';

type SpanProps = {
    children: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string,
    margin?: string,
    borderBottom?: string,
};

const StyledSpan = styled.span`
    color: ${(props : SpanProps) => props.color || 'black'};
    font-size: ${(props : SpanProps) => props.fontSize || '16px'};
    font-weight: ${(props : SpanProps) => props.fontWeight || 'normal'};
    margin: ${(props : SpanProps) => props.margin || '0'};
    border-bottom: ${(props : SpanProps) => props.borderBottom || '0'};
`;

const Span = ({
    children,
    color,
    fontSize,
    fontWeight,
    margin,
    borderBottom
} : SpanProps) => {
    const props = {
        color,
        fontSize,
        fontWeight,
        margin,
        borderBottom
    };
    
    return (
        <StyledSpan {...props}>
            {children}
        </StyledSpan>
    );
};

export default Span;
