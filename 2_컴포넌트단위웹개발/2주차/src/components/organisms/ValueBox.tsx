import styled from 'styled-components';

type ValueBoxProps = {
    valueList?: any;
};


const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const IncomeBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: calc(100% - 36px);
    width: 100%;
`

const InnerIncomeBox = styled.div<{ percentLeftTotalvalue : string }>`
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
    height: ${(props) => `${props.percentLeftTotalvalue}%` || 'auto'};
    background-color: ${(props) => `hsl(${props.percentLeftTotalvalue}, 60%, 51%)` || 'white'};
`

const SpendingBox = styled.div`
    display: flex;
    justify-content: center;
    height: 36px;
    margin-top: 4px;
    font-weight: bold;
`

function ValueBox({
    valueList
} : ValueBoxProps) {
    const defaultTotalValue = 450000;

    const getTotalValue: any = (valueList: any) => {
        const values = Object.values(valueList);
        return values.reduce((acc: any, cur) => acc + cur, 0);
    };

    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) * 100
    );

    return (
        <Wrapper>
            <IncomeBox>
                <InnerIncomeBox percentLeftTotalvalue={`${percentLeftTotalvalue}`}>
                <div>
                    {`${defaultTotalValue - getTotalValue(valueList)}원 남음`}
                </div>
                </InnerIncomeBox>
            </IncomeBox>
            <SpendingBox>
                {`${new Date().getMonth() + 1}월 : ${getTotalValue(valueList)}원`}
            </SpendingBox>
        </Wrapper>
    );
};

export default ValueBox;
