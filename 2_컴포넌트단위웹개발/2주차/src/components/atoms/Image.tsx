import styled from 'styled-components';

type ImageProps = {
    height?: string,
    width?: string,
    border?: string,
    borderRadius?: string,
    src?: string,
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void,
};

const StyledImage = styled.img`
    height: ${(props : ImageProps) => props.height || 'auto'};
    width: ${(props : ImageProps) => props.width || 'auto'};
    border: ${(props : ImageProps) => props.border || '0'};
    border-radius: ${(props : ImageProps) => props.borderRadius || '0'};
`;

function Image({
    height,
    width,
    border,
    borderRadius,
    src,
    onClick,
} : ImageProps) {
    const props = {
        height,
        width,
        border,
        borderRadius,
        src,
        onClick,
    };

    return (
        <StyledImage {...props} />
    );
};

export default Image;
