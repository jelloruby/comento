import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { query as q } from 'faunadb';
import db from '../../db';
import styled from 'styled-components';

import { loadingState } from '../../states/atoms/loadingState';
import { valueListState } from '../../states/atoms/valueListState';
import { selectedNameState } from '../../states/atoms/selectedNameState';
import { imgURLObj } from '../../data';

import Form from '../organisms/Form';
import List from '../organisms/List';
import ValueBox from '../organisms/ValueBox';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Content() {
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
        <ContentWrapper>
            <Form
                nameList={nameList}
                selectedName={selectedName}
                loading={loading}
                valueList={valueList}
                setLoading={setLoading}
                setValueList={setValueList}
                setSelectedName={setSelectedName}
            />
            <div style={{ display: 'flex' }}>
                <List
                    nameList={nameList}
                    selectedName={selectedName}
                    loading={loading}
                    valueList={valueList}
                    setLoading={setLoading}
                    setValueList={setValueList}
                />
                <ValueBox
                    valueList={valueList}
                />
            </div>
        </ContentWrapper>
    );
};

export default Content;
