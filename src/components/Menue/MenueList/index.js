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
  NoResultsImg,
  ErrMsg,
  ErrContainer,
} from "./styled";

import MenueCard from "./MenueCard";

import noResult from "../../../images/no_result.svg";

import Loading from "react-spinners/MoonLoader";

const MenueList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const [burgers, setBurgers] = useState([]);
  const [wraps, setWraps] = useState([]);
  const [tctFavorites, setTctFavorites] = useState([]);
  const [sides, setSides] = useState([]);
  const [tctCombos, setTctCombos] = useState([]);
  const [tctMealForTwos, setTctMealForTwos] = useState([]);

  const setMenueCategories = (response) => {
    setBurgers(response.burger);
    setWraps(response.wraps);
    setTctFavorites(response.tctFavorite);
    setSides(response.sides);
    setTctCombos(response.tctCombo);
    setTctMealForTwos(response.tctMealForTwo);
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/menue.json")
      .then((response) => {
        setMenueCategories(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoaded(false);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Our Menu</Title>
      <Line />

      <MenueContainer>
        {isLoaded ? (
          <div>
            {/* //! TCT's menue */}

            <Heading>The Chicken Town</Heading>
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

            {/* //! gauthankars kitchen menue */}
            <Line />

            <Heading>gauthankars kicthen</Heading>
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
          </div>
        ) : (
          <FailedToLoad>
            {isError ? (
              <ErrContainer>
                <NoResultsImg src={noResult} />
                <ErrMsg>Failed to Load Menue.</ErrMsg>
              </ErrContainer>
            ) : (
              <ErrContainer>
                <Loading color={"#ff2929"} size={50} />
              </ErrContainer>
            )}
          </FailedToLoad>
        )}
      </MenueContainer>
    </Wrapper>
  );
};

export default MenueList;
