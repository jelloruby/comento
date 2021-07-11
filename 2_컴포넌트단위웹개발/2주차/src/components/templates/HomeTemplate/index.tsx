import styled from 'styled-components';

import Title from '../../molecules/Title';
import Content from '../../organisms/Content';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 16px;
`;

function HomeTemplate() {
    return (
        <Wrapper>
            <Title>오늘 먹은 점심 값은?</Title>
            <Content />
        </Wrapper>
    );
};

export default HomeTemplate;
