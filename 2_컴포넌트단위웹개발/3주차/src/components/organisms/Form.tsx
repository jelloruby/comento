import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { query as q } from 'faunadb';
import db from '../../db';
import styled from 'styled-components';

import { loadingState, valueListState, selectedNameState } from '../../states';
import { imgURLObj, nameTypes } from '../../data';

import Select from '../atoms/Select';
import Input from '../atoms/Input';
import Span from '../atoms/Span';
import Button from '../atoms/Button';

const FormWrapper = styled.form`
    display: flex;
    margin-bottom: 8px;
    height: 36px;
`;

function Form() {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const nameList: any = Object.keys(imgURLObj);

    const [value, setValue] = useState<any>();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [valueList, setValueList] = useRecoilState(valueListState);
    const [selectedName, setSelectedName] = useRecoilState(selectedNameState);
    
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

    return (
        <FormWrapper>
            <Select
                className='name'
                onChange={handleChangeName}
            >
                {nameList.map((name: nameTypes, i: number) => (
                    <option
                        key={i}
                        value={name}
                        selected={name == selectedName}
                    >
                        {name}
                    </option>
                ))}
            </Select>
            <Input
                className='cost'
                type='number'
                onChange={handleChangeValue}
            />
            <Span className='price_unit'>원</Span>
            <Button
                className='enter'
                disable={loading}
                onClick={handleClick}
            >
                입력
            </Button>
        </FormWrapper>
    );
};

export default Form;
