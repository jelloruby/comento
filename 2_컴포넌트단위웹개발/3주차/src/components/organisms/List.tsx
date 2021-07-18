import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { query as q } from 'faunadb';
import db from '../../db';
import styled from 'styled-components';

import { loadingState, valueListState, selectedNameState } from '../../states';
import { imgURLObj, nameTypes } from '../../data';

import ListItem from '../molecules/ListItem';
import ImageBox from './ImageBox';

const ListWrapper = styled.ul`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

function List() {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const nameList: any = Object.keys(imgURLObj);

    const [loading, setLoading] = useRecoilState(loadingState);
    const [valueList, setValueList] = useRecoilState(valueListState);
    const [selectedName, setSelectedName] = useRecoilState(selectedNameState);

    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));
        setValueList(data);

        setLoading(false);
    };

    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        setSelectedName(defaultSelectedName || '은비');

        setValueListFromDB();
    }, []);

    return (
        <ListWrapper>
            {nameList.map((name: nameTypes, i: number) => (
                <ListItem
                    className='cost'
                    key={i}
                >
                    <ImageBox
                        name={name}
                        isSelected={selectedName == name}
                        src={imgURLObj[name]}
                    />
                    <div>{loading ? '...' : valueList[name]}원</div>
                </ListItem>
            ))}
        </ListWrapper>
    );
};

export default List;
