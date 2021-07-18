import styled from 'styled-components';

import Title from '../../atoms/Title';
import Form from '../../organisms/Form';
import List from '../../organisms/List';
import ValueBox from '../../organisms/ValueBox';

const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const ValueBoard = styled.div`
    display: flex;
`;

function HomeTemplate() {
    return (
        <TemplateWrapper>
            <Title fontSize="28px" margin="0 0 16px 0">오늘 먹은 점심 값은?</Title>
            <Content>
                <Form />
                <ValueBoard>
                    <List />
                    <ValueBox />
                </ValueBoard>
            </Content>
        </TemplateWrapper>
    );
};

export default HomeTemplate;
