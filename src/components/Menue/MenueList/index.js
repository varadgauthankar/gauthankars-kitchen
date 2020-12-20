import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MenueContainer, Title, Wrapper, Heading } from "./styled";

import MenueCard from "./MenueCard";

const MenueList = () => {
  const [burgers, setBurgers] = useState([]);
  const [wraps, setWraps] = useState([]);
  const [tctFavorites, setTctFavorites] = useState([]);
  const [sides, setSides] = useState([]);
  const [tctCombos, setTctCombos] = useState([]);
  const [tctMealForTwos, setTctMealForTwos] = useState([]);

  useEffect(() => {
    Axios.get("https://gauthankarskitchen.com/menue.json")
      .then((response) => {
        setBurgers(response.data.burger);
        setWraps(response.data.wraps);
        setTctFavorites(response.data.tctFavorite);
        setSides(response.data.sides);
        setTctCombos(response.data.tctCombo);
        setTctMealForTwos(response.data.tctMealForTwo);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Wrapper>
      <MenueContainer>
        <Title>Our Menue</Title>
        <Heading>The Chicken Town</Heading>

        <MenueCard itemList={burgers} itemCategory="Burgers" />

        <MenueCard itemList={wraps} itemCategory="Wraps" />

        <MenueCard itemList={tctFavorites} itemCategory="TCT's Favorite" />

        <MenueCard itemList={sides} itemCategory="Sides" />

        <MenueCard itemList={tctCombos} itemCategory="TCT's Combos" />

        <MenueCard
          itemList={tctMealForTwos}
          itemCategory="TCT's Meal For Two"
        />
      </MenueContainer>
    </Wrapper>
  );
};

export default MenueList;
