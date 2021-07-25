import styled from 'styled-components';

type BoxProps = {
    children?: any,
    className?: string,
    percentLeftTotalvalue?: number,
};

const StyledBox = styled.div<BoxProps>`
    &.incomeBox {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        height: ${({ percentLeftTotalvalue }) => `${ percentLeftTotalvalue }%` || 'auto'};
        background-color: ${({ percentLeftTotalvalue }) => `hsl(${ percentLeftTotalvalue }, 60%, 51%)` || 'white'};
    }
`;

function Box({
    children,
    className,
    percentLeftTotalvalue,
} : BoxProps) {
    return (
        <StyledBox
            className={className}
            percentLeftTotalvalue={percentLeftTotalvalue}
        >
            {children}
        </StyledBox>
    );
};

export default Box;
