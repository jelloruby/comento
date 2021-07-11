import styled from 'styled-components';
import { nameTypes } from '../../data';

import Select from '../atoms/Select';
import Option from '../atoms/Option';
import Input from '../atoms/Input';
import Span from '../atoms/Span';
import Button from '../atoms/Button';

type FormProps = {
    loading?: boolean,
    nameList?: any,
    selectedName?: string,
    value?: any,
    handleChangeName: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const Wrapper = styled.form`
    display: flex;
    margin-bottom: 8px;
    height: 36px;
`;

function Form({
    loading,
    nameList,
    selectedName,
    value,
    handleChangeName,
    handleChangeValue,
    handleClick
} : FormProps) {
    return (
        <Wrapper>
            <Select
                margin='0 16px 0 0'
                height='36px'
                width='72px'
                border='1px solid grey'
                borderRadius='8px'
                fontSize='20px'
                onChange={handleChangeName}
            >
                {nameList.map((name: nameTypes, i: number) => (
                    <Option
                        key={i}
                        value={name}
                        selected={name == selectedName}
                    >
                        {name}
                    </Option>
                ))}
            </Select>
            <Input
                type='number'
                width='80px'
                border='none'
                borderBottom='1px solid grey'
                fontSize='20px'
                value={value}
                onChange={handleChangeValue}
            />
            <Span fontSize='20px' margin='0 16px 0 0'>원</Span>
            <Button
                height='36px'
                width='64px'
                border='1px solid grey'
                borderRadius='8px'
                backgroundColor='white'
                fontSize='20px'
                onClick={handleClick}
                disable={loading}
            >
                입력
            </Button>
        </Wrapper>
    );
};

export default Form;
