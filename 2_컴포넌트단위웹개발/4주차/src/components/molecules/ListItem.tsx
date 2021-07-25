import styled from 'styled-components';

type ListItemProps = {
    children?: any,
    className?: string,
};

const StyledListItem = styled.li`
    display: flex;
    align-items: center;

    &.cost {
        height: 44px;
        margin: 6px 0px;
    }
`;

const ListItem = ({
    children,
    className,
} : ListItemProps) => {
    return (
        <StyledListItem className={className}>
            {children}
        </StyledListItem>
    );
};

export default ListItem;
