import { StyledList } from "./styled";
import { childrenProp } from "@/types";
import { forwardRef } from "react";

const List = forwardRef<HTMLUListElement, childrenProp>(
  ({ children }: childrenProp, ref) => {
    return <StyledList ref={ref}>{children}</StyledList>;
  }
);

export default List;
