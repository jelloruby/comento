import styled from 'styled-components';

type ListItemProps = {
    children?: any,
    height?: string,
    margin?: string,
};

const StyledListItem = styled.div`
    display: flex;
    align-items: center;
    height: ${(props : ListItemProps) => props.height || 'auto'};
    margin: ${(props : ListItemProps) => props.margin || 'auto'};
`;

const ListItem = ({
    children,
    height,
    margin
} : ListItemProps) => {
    const props = {
        height,
        margin
    };

    return (
        <StyledListItem {...props}>
            {children}
        </StyledListItem>
    );
};

export default ListItem;
