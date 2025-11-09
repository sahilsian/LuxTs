import React, {type PropsWithChildren} from "react";
import styled from "styled-components";


interface CategoryDecoratorProps {
    children: PropsWithChildren
}
interface ContainerProps {

}

const Container = styled.div<ContainerProps>``;

const CategoryDecorator = ({children}:CategoryDecoratorProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default CategoryDecorator;