import styled from 'styled-components';

import Title from '../../atoms/Title';
import Content from '../../organisms/Content';

const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
`;

function HomeTemplate() {
    return (
        <TemplateWrapper>
            <Title fontSize="28px" margin="0 0 16px 0">오늘 먹은 점심 값은?</Title>
            <Content />
        </TemplateWrapper>
    );
};

export default HomeTemplate;
