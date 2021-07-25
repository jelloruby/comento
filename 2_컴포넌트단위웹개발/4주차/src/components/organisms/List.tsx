import { query as q } from 'faunadb';
import db from '../../db';
import styled from 'styled-components';

import { imgURLObj, nameTypes } from '../../data';

import ListItem from '../molecules/ListItem';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const ListWrapper = styled.ul`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

type ListProps = {
    nameList: any,
    selectedName: string,
    loading: boolean,
    valueList: any,
    setLoading: any,
    setValueList: any,
};

function List({
    nameList,
    selectedName,
    loading, 
    valueList,
    setLoading,
    setValueList,
}: ListProps) {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');

    const handleClickToResetValue = async () => {
        setLoading(true);

        const { data } = await db.query<any>(
            q.Update(ref, {
                data: {
                    ...valueList,
                    [selectedName]: 0,
                },
            })
        );
        setValueList(data);

        setLoading(false);
    };

    return (
        <ListWrapper>
            {nameList.map((name: nameTypes, i: number) => (
                <ListItem
                    className='cost'
                    key={i}
                >
                    <Image
                        className='list_img'
                        src={imgURLObj[name]}
                        isSelected={selectedName === name}
                        handleClickToResetValue={handleClickToResetValue}
                    />
                    <Text>{`${loading ? '...' : valueList[name]}원`}</Text>
                </ListItem>
            ))}
        </ListWrapper>
    );
};

export default List;
