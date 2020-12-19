import React from "react";
import {
  MenueItemCard,
  MenueItemCategoryName,
  MenueItemContainer,
  MenueItemName,
  MenueItemPrice,
  MenueSection,
  Ul,
  Li,
} from "./styled";

const MenueCard = ({ itemList, itemCategory }) => {
  return (
    <MenueSection>
      <MenueItemCard>
        <MenueItemCategoryName>{itemCategory}</MenueItemCategoryName>
        <Ul>
          {itemList.map((item) => (
            <Li key={item.id}>
              <MenueItemContainer>
                <MenueItemName>{item.itemName}</MenueItemName>
                <MenueItemPrice>{item.itemPrice}</MenueItemPrice>
              </MenueItemContainer>
            </Li>
          ))}
        </Ul>
      </MenueItemCard>
    </MenueSection>
  );
};

export default MenueCard;
