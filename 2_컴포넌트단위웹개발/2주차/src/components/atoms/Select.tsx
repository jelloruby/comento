import styled from 'styled-components';

type SelectProps = {
    children: string,
    margin?: string,
    height?: string,
    width?: string,
    border?: string,
    borderRadius?: string,
    fontSize?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
};

const StyledSelect = styled.select`
    margin: ${(props : SelectProps) => props.margin || '0px'};
    height: ${(props : SelectProps) => props.height || 'auto'};
    width: ${(props : SelectProps) => props.width || 'auto'};
    border: ${(props : SelectProps) => props.border || 'medium'};
    border-radius: ${(props : SelectProps) => props.borderRadius || '0'};
    font-size: ${(props : SelectProps) => props.fontSize || '16px'};
`;

function Select({
    children,
    margin,
    height,
    width,
    border,
    borderRadius,
    fontSize,
    onChange,
} : SelectProps) {
    const props = {
        children,
        margin,
        height,
        width,
        border,
        borderRadius,
        fontSize,
        onChange,
    };

    return (
        <StyledSelect {...props}>
            {children}
        </StyledSelect>
    );
};

export default Select;
