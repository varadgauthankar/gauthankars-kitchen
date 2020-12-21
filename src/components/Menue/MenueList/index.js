import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  MenueContainer,
  Title,
  Wrapper,
  Heading,
  FailedToLoad,
  Column1,
  Column2,
  MenueGrid,
  Line,
} from "./styled";

import MenueCard from "./MenueCard";

const MenueList = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [burgers, setBurgers] = useState([]);
  const [wraps, setWraps] = useState([]);
  const [tctFavorites, setTctFavorites] = useState([]);
  const [sides, setSides] = useState([]);
  const [tctCombos, setTctCombos] = useState([]);
  const [tctMealForTwos, setTctMealForTwos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/menue.json")
      .then((response) => {
        setBurgers(response.data.burger);
        setWraps(response.data.wraps);
        setTctFavorites(response.data.tctFavorite);
        setSides(response.data.sides);
        setTctCombos(response.data.tctCombo);
        setTctMealForTwos(response.data.tctMealForTwo);

        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error.response.status);
        setIsLoaded(false);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Our Menue</Title>
      <Line />

      <MenueContainer>
        <Heading>The Chicken Town</Heading>
        {isLoaded ? (
          <MenueGrid>
            <Column1>
              <MenueCard itemList={burgers} itemCategory="Burgers" />

              <MenueCard itemList={wraps} itemCategory="Wraps" />

              <MenueCard
                itemList={tctFavorites}
                itemCategory="TCT's Favorite"
              />
            </Column1>

            <Column2>
              <MenueCard itemList={sides} itemCategory="Sides" />
              <MenueCard itemList={tctCombos} itemCategory="TCT's Combos" />
              <MenueCard
                itemList={tctMealForTwos}
                itemCategory="TCT's Meal For Two"
              />
            </Column2>
          </MenueGrid>
        ) : (
          <FailedToLoad>
            <Title>Something went Wrong</Title>
          </FailedToLoad>
        )}
      </MenueContainer>
    </Wrapper>
  );
};

export default MenueList;
