import React from 'react';
import styled from 'styled-components';

type InputProps = {
    width?: string,
    border?: string,
    borderBottom?: string,
    fontSize?: string,
    type?: string,
    value?: any,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const StyledInput = styled.input`
    width: ${(props : InputProps) => props.width || 'auto'};
    border: ${(props : InputProps) => props.border || 'medium'};
    border-bottom: ${(props : InputProps) => props.borderBottom || 'none'};
    font-size: ${(props : InputProps) => props.fontSize || '16px'};
`;

function Select({
    width,
    border,
    borderBottom,
    fontSize,
    type,
    value,
    onChange,
} : InputProps) {
    const props = {
        width,
        border,
        borderBottom,
        fontSize,
        type,
        value,
        onChange,
    };

    return (
        <StyledInput {...props} />
    );
};

export default Select;
