import styled from 'styled-components';
import Span from '../atoms/Span';

type TttleProps = {
    children: string,
};

const StyledTitle = styled.div`
    text-align: left;
    padding-top: 16px;
    margin-bottom: 16px;
`;

const Title = ({
    children,
} : TttleProps) => {
    return (
        <StyledTitle>
            <Span fontSize="28px" color="black" fontWeight="bold">
                {children}
            </Span>
        </StyledTitle>
    );
};

export default Title;
