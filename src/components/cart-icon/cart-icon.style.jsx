import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from "../../assets/111 shopping-bag.svg";

export const ShopingCartIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;
export const CartIonContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
