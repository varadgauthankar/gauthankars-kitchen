import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  MenueContainer,
  Title,
  Wrapper,
  HeadingImg,
  FailedToLoad,
  Column1,
  Column2,
  MenueGrid,
  Line,
  NoResultsImg,
  ErrMsg,
  ErrContainer,
  HeadingImgWrap,
} from "./styled";

import MenueCard from "./MenueCard";

import noResult from "../../../images/no_result.svg";

import tct from "../../../images/logo/tct_menue.png";
import bar from "../../../images/logo/bar_station_menue.png";

import Loading from "react-spinners/MoonLoader";

const MenueList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const [softDrink, setSoftDrink] = useState([]);
  const [coolers, setCoolers] = useState([]);
  const [iceCreamShakes, setIceCreamShakes] = useState([]);
  const [iceCream, setIceCream] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [wraps, setWraps] = useState([]);
  const [sides, setSides] = useState([]);
  const [dips, setDips] = useState([]);
  const [soup, setSoup] = useState([]);
  const [special, setSpecial] = useState([]);

  const [tctFavorites, setTctFavorites] = useState([]);
  const [tctCombos, setTctCombos] = useState([]);
  const [tctMealForTwos, setTctMealForTwos] = useState([]);

  const setMenueCategories = (response) => {
    setSoftDrink(response.softDrink);
    setCoolers(response.coolers);
    setIceCreamShakes(response.iceCreamShake);
    setIceCream(response.iceCream);
    setDessert(response.dessert);
    setBurgers(response.burger);
    setWraps(response.wraps);
    setSoup(response.soup);
    setDips(response.dips);
    setTctFavorites(response.tctFavorite);
    setSides(response.sides);
    setTctCombos(response.tctCombo);
    setTctMealForTwos(response.tctMealForTwo);
    setSpecial(response.special);
  };

  useEffect(() => {
    Axios.get("https://gauthankarskitchen.com/menue.json")
      .then((response) => {
        setMenueCategories(response.data);
        setIsLoaded(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
            <HeadingImgWrap>
              <HeadingImg src={tct} />
            </HeadingImgWrap>

            <MenueGrid>
              <Column1>
                <MenueCard itemList={softDrink} itemCategory="Soft Drink" />
                <MenueCard itemList={coolers} itemCategory="Coolers" />
                <MenueCard
                  itemList={iceCreamShakes}
                  itemCategory="Ice Cream Shakes"
                />
                <MenueCard itemList={burgers} itemCategory="Burgers" />
                <MenueCard itemList={wraps} itemCategory="Wraps" />
              </Column1>

              <Column2>
                <MenueCard itemList={sides} itemCategory="Sides" />
                <MenueCard
                  itemList={tctFavorites}
                  itemCategory="TCT's Favorite"
                />
                <MenueCard itemList={tctCombos} itemCategory="TCT's Combos" />
                <MenueCard
                  itemList={tctMealForTwos}
                  itemCategory="Meal For Two"
                />
                <MenueCard itemList={soup} itemCategory="Soup" />
                <MenueCard itemList={dips} itemCategory="Delicious Dips" />
                <MenueCard itemList={special} itemCategory="Our Speciality" />
                <MenueCard itemList={dessert} itemCategory="Desserts" />
                <MenueCard itemList={iceCream} itemCategory="Ice Cream" />
              </Column2>
            </MenueGrid>

            {/* //! Bar Menue */}

            <HeadingImgWrap>
              <HeadingImg src={bar} />
            </HeadingImgWrap>
            {/* <Heading>gauthankars kicthen</Heading> */}
            <MenueGrid>
              <Column1>"pls work"</Column1>

              <Column2>"pls work"</Column2>
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
