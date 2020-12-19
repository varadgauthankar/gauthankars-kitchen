import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  MenueContainer,
  Title,
  MenueItemCategory,
  MenueItemCard,
  MenueItemContainer,
  MenueItem,
  MenueItemName,
  MenueItemPrice,
  MenueSection,
} from "./styled";

const MenueList = () => {
  const [burgerList, setBurgerList] = useState([]);
  const [fishThaliList, setFishThali] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/varadgauthankar/gauthankars-kitchen/master/public/menue.json?token=AGPEE3JVCUY5O4MVBE5RY2K745GX4"
    )
      .then((response) => {
        setBurgerList(response.data.burger);

        setFishThali(response.data.fishThali);

        console.log(burgerList);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <MenueContainer>
      <Title>Our Menue</Title>
      <Title>The Chicken Town</Title>
      <MenueSection>
        <MenueItemCard>
          <MenueItemCategory>Burgers</MenueItemCategory>
          <ul>
            {fishThaliList.map((item) => (
              <li key={item.id}>
                <MenueItemContainer>
                  <MenueItemName>{item.itemName}</MenueItemName>
                  <MenueItemPrice>{item.itemPrice}</MenueItemPrice>
                </MenueItemContainer>
              </li>
            ))}
          </ul>
        </MenueItemCard>
      </MenueSection>
      {/* <MenueItemContainer>
        <MenueItemCategory>f</MenueItemCategory>
        <MenueItem>
          <MenueItemName></MenueItemName>
          <MenueItemPrice></MenueItemPrice>
        </MenueItem>
      </MenueItemContainer> */}
    </MenueContainer>
  );
};

export default MenueList;
