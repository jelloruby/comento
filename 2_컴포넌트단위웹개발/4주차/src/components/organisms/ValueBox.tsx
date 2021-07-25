import styled from 'styled-components';

import { getTotalValue } from '../../util/index';

import Box from '../molecules/Box';
import Text from '../atoms/Text';

const ValueBoxWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const WrapBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    margin-top: 6px;
    background-color: rgba(200, 200, 200, 0.2);
`;

type ValueBoxProps = {
    valueList: any,
};

function ValueBox({
    valueList,
}: ValueBoxProps) {
    const defaultTotalValue = 450000;
    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) * 100
    );

    return (
        <ValueBoxWrapper>
            <WrapBox>
                <Box className='incomeBox' percentLeftTotalvalue={percentLeftTotalvalue}>
                    <Text className='income'>
                        {`${defaultTotalValue - getTotalValue(valueList)}원 남음`}
                    </Text>
                </Box>
            </WrapBox>
            <Text className='spending'>
                {`${new Date().getMonth() + 1}월 : ${getTotalValue(valueList)}원`}
            </Text>
        </ValueBoxWrapper>
    );
};

export default ValueBox;
