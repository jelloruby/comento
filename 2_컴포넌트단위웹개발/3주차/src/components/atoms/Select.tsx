import styled from 'styled-components';

type SelectProps = {
    children: string,
    className?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
};

const StyledSelect = styled.select`
    &.name {
        width: 72px;
        height: 36px;
        margin: 0 16px 0 0;
        border: 1px solid grey;
        border-radius: 8px;
        font-size: 20px;
    }
`;

function Select({
    children,
    className,
    onChange,
} : SelectProps) {
    return (
        <StyledSelect
            className={className}
            onChange={onChange}
        >
            {children}
        </StyledSelect>
    );
};

export default Select;
