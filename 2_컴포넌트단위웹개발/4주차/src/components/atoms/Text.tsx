import styled from 'styled-components';

type TextProps = {
    children: string,
    className?: string,
};

const StyledText = styled.span`
    &.price_unit {
        font-size: 20px;
        margin: 0 16px 0 0;
    }
    
    &.income {
        display: flex;
        justify-content: center;
        color: white;
    }

    &.spending {
        display: flex;
        justify-content: center;
        height: 36px;
        margin-top: 4px;
        font-weight: bold;
    }
`;

const Text = ({
    children,
    className,
} : TextProps) => {
    return (
        <StyledText className={className}>
            {children}
        </StyledText>
    );
};

export default Text;
