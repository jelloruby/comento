import styled from 'styled-components';

type SpanProps = {
    children: string,
    className?: string,
};

const StyledSpan = styled.span`
    &.price_unit {
        font-size: 20px;
        margin: 0 16px 0 0;
    }
`;

const Span = ({
    children,
    className,
} : SpanProps) => {
    return (
        <StyledSpan className={className}>
            {children}
        </StyledSpan>
    );
};

export default Span;
