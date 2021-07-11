import styled from 'styled-components';

type ButtonProps = {
    children: string,
    disable?: boolean,
    height?: string,
    width?: string,
    border?: string,
    borderRadius?: string,
    backgroundColor?: string,
    fontSize?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const StyledButton = styled.button`
    height: ${(props : ButtonProps) => props.height || 'auto'};
    width: ${(props : ButtonProps) => props.width || 'auto'};
    border: ${(props : ButtonProps) => props.border || 'medium'};
    border-radius: ${(props : ButtonProps) => props.borderRadius || '0'};
    background-color: ${(props : ButtonProps) => props.backgroundColor || 'transparent'};
    font-size: ${(props : ButtonProps) => props.fontSize || '16px'};
`;

function Button({
    children,
    disable,
    height,
    width,
    border,
    borderRadius,
    backgroundColor,
    fontSize,
    onClick,
} : ButtonProps) {
    const props = {
        disable,
        height,
        width,
        border,
        borderRadius,
        backgroundColor,
        fontSize,
        onClick,
    };

    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
