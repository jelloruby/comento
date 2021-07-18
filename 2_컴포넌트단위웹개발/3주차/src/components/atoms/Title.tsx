import styled from 'styled-components';

type TttleProps = {
    children: string,
    textAlign?: string,
    color?: string,
    fontSize?: string,
    margin?: string,
    padding?: string,
};

const StyledTitle = styled.h1<TttleProps>`
    text-align: ${({ textAlign }) => textAlign || 'initial'};
    color: ${({ color }) => color || 'black'};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    margin: ${({ margin }) => margin || '0'};
    padding: ${({ padding }) => padding || '0'};
`;

const Title = ({
    children,
    textAlign,
    color,
    fontSize,
    margin,
    padding,
} : TttleProps) => {
    return (
        <StyledTitle
            textAlign={textAlign}
            color={color}
            fontSize={fontSize}
            margin={margin}
            padding={padding}
        >
            {children}
        </StyledTitle>
    );
};

export default Title;
