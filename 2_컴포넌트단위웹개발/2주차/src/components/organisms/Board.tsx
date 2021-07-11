import styled from 'styled-components';

import List from './List';
import ValueBox from './ValueBox';

type BoardProps = {
    selectedName?: string;
    valueList?: any;
    nameList?: any;
    setValueList?: any;
    loading?: boolean;
    setLoading?: any;
    value?: any;
};

const Wrapper = styled.div`
    display: flex;
    height: 90%;
`;

function Board({
    selectedName,
    valueList,
    nameList,
    setValueList,
    loading,
    setLoading,
    value,
} : BoardProps) {
    const ListProps = {
        selectedName,
        valueList,
        nameList,
        setValueList,
        loading,
        setLoading,
        value,
    };

    const ValueBoxProps = {
        valueList,
    };

    return (
        <Wrapper>
            <List {...ListProps} />
            <ValueBox {...ValueBoxProps} />
        </Wrapper>
    );
};

export default Board;
