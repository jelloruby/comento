import styled from 'styled-components';
import { imgURLObj, nameTypes } from '../../data';

import ListItem from '../molecules/ListItem';
import Image from '../atoms/Image';
import Span from '../atoms/Span';

type ListProps = {
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
    flex: 1;
    flex-direction: column;
`;

function List({
    selectedName,
    valueList,
    nameList,
    setValueList,
    loading,
    setLoading,
    value,
} : ListProps) {
    return (
        <Wrapper>
            {nameList.map((name: nameTypes, i: number) => (
                <ListItem
                    key={i}
                    name={name}
                    // isSelected={selectedName == name}
                    // value={valueList[name]}
                    // valueList={valueList}
                    // setValueList={setValueList}
                    // loading={loading}
                    // setLoading={setLoading}
                    height='44px'
                    margin='6px 0px'
                >
                    <Image
                        height='40px'
                        width='40px'
                        // border={isSelected ? '2px solid grey' : undefined}
                        borderRadius='8px'
                        src={imgURLObj[name]}
                    />
                    <div>
                        {loading ? '...' : value}
                        <Span>원</Span>
                    </div>
                </ListItem>
            ))}
        </Wrapper>
    );
};

export default List;
