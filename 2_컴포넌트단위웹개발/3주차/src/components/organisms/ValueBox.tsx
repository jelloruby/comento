import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { valueListState } from '../../states';
import { getTotalValue } from '../../util/index';

const ValueBoxWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const IncomeBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: calc(100% - 36px);
`

const InnerIncomeBox = styled.div<{ percentLeftTotalvalue : string }>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${({ percentLeftTotalvalue }) => `${percentLeftTotalvalue}%` || 'auto'};
    color: white;
    background-color: ${({ percentLeftTotalvalue }) => `hsl(${percentLeftTotalvalue}, 60%, 51%)` || 'white'};
`

const SpendingBox = styled.div`
    display: flex;
    justify-content: center;
    height: 36px;
    margin-top: 4px;
    font-weight: bold;
`

function ValueBox() {
    const defaultTotalValue = 450000;
    const valueList = useRecoilValue(valueListState);

    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) * 100
    );

    return (
        <ValueBoxWrapper>
            <IncomeBox>
                <InnerIncomeBox percentLeftTotalvalue={`${percentLeftTotalvalue}`}>
                    {`${defaultTotalValue - getTotalValue(valueList)}원 남음`}
                </InnerIncomeBox>
            </IncomeBox>
            <SpendingBox>
                {`${new Date().getMonth() + 1}월 : ${getTotalValue(valueList)}원`}
            </SpendingBox>
        </ValueBoxWrapper>
    );
};

export default ValueBox;
