import { useState } from 'react';
import { query as q } from 'faunadb';
import db from '../../db';
import styled from 'styled-components';

import { nameTypes } from '../../data';

import Select from '../atoms/Select';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const FormWrapper = styled.form`
    display: flex;
`;

type FormProps = {
    nameList: any,
    selectedName: string,
    loading: boolean,
    valueList: any,
    setLoading: any,
    setValueList: any,
    setSelectedName: any,
};

function Form({
    nameList,
    selectedName,
    loading, 
    valueList,
    setLoading,
    setValueList,
    setSelectedName,
}: FormProps) {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const [value, setValue] = useState<any>();

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
            <Text className='price_unit'>원</Text>
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
