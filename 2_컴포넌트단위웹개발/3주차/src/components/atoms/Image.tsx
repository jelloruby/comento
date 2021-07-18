import styled from 'styled-components';

type ImageProps = {
    className?: string,
    isSelected?: boolean,
    src?: string,
};

const StyledImage = styled.img<ImageProps>`
    &.list_img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: ${({ isSelected }) => isSelected ? '1px solid grey' : undefined};
    }
`;

function Image({
    className,
    isSelected,
    src,
} : ImageProps) {
    return (
        <StyledImage
            className={className}
            isSelected={isSelected}
            src={src}
        />
    );
};

export default Image;
