import styled from 'styled-components';

type InputProps = {
    className?: string,
    type?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const StyledInput = styled.input`
    &.cost {
        width: 80px;
        border: none;
        border-bottom: 1px solid grey;
        font-size: 20px;
    }
`;

function Select({
    className,
    type,
    onChange,
} : InputProps) {
    return (
        <StyledInput
            className={className}
            type={type}
            onChange={onChange}
        />
    );
};

export default Select;
