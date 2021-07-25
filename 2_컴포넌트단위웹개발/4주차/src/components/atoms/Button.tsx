import styled from 'styled-components';

type ButtonProps = {
    children: string,
    className?: string,
    disable?: boolean,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const StyledButton = styled.button`
    &.enter {
        width: 64px;
        height: 36px;
        border: 1px solid grey;
        border-radius: 8px;
        background-color: white;
        font-size: 20px;
    }
`;

function Button({
    children,
    className,
    disable,
    onClick,
} : ButtonProps) {
    return (
        <StyledButton
            className={className}
            disabled={disable}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
