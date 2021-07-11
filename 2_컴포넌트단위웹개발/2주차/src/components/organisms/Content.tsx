import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { query as q } from 'faunadb';
import { imgURLObj, nameTypes, defaultValueList } from '../../data';
import db from '../../db';

import Form from './Form';
import Board from './Board';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Content() {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const nameList: any = Object.keys(imgURLObj);

    const [value, setValue] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [selectedName, setSelectedName] = useState<nameTypes>('태양');
    const [valueList, setValueList] = useState<any>(defaultValueList);

    const handleChangeValue = (e: any) => {
        setValue(e.target.value);
    };

    const handleClick = async () => {
        setLoading(true);

        const { data } = await db.query<any>(
            q.Update(ref, {
                data: {
                    ...valueList,
                    [selectedName]: valueList[selectedName] + Number(value),
                },
            })
        );
        setValueList(data);
        setValue('');

        setLoading(false);
    };

    const handleChangeName = (e: any) => {
        setSelectedName(e.target.value);
        localStorage.setItem('defaultSelectedName', e.target.value);
    };

    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));
        console.log('data from DB', data);
        setValueList(data);

        setLoading(false);
    };

    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        console.log(defaultSelectedName);
        setSelectedName(defaultSelectedName || '태양');

        setValueListFromDB();
    }, []);

    return (
        <Wrapper>
            <Form 
                loading={loading}
                nameList={nameList}
                handleChangeName={handleChangeName}
                selectedName={selectedName}
                value={value}
                handleChangeValue={handleChangeValue}
                handleClick={handleClick}
            />
            <Board
                selectedName={selectedName}
                valueList={valueList}
                nameList={nameList}
                setValueList={setValueList}
                loading={loading}
                setLoading={setLoading}
                value={value}
            />
        </Wrapper>
    );
};

export default Content;
