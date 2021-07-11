import styled from 'styled-components';

type OptionProps = {
    children: string,
    key: any,
    value: string,
    selected?: boolean,
};

const StyledOption = styled.option`
`;

function Select({
    children,
    key,
    value,
    selected,
} : OptionProps) {
    const props = {
        key,
        value,
        selected,
    };

    return (
        <StyledOption {...props}>
            {children}
        </StyledOption>
    );
};

export default Select;
