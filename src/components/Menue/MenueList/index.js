import React, { useEffect, useState } from "react";

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
import gk from "../../../images/logo/gauthankars_kitchen_full.svg";


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

  const [grillChicken, setGrillChicken] = useState([]);
  const [crispyChicken, setCrispyChicken] = useState([]);
  const [startersNonVeg, setStartersNonVeg] = useState([]);
  const [startersVeg, setStartersVeg] = useState([]);
  const [fishStarters, setFishStarters] = useState([]);
  const [mainCourseVeg, setMainCourseVeg] = useState([]);
  const [mainCourseNonVeg, setMainCourseNonVeg] = useState([]);
  const [thali, setThali] = useState([]);
  const [fishFry, setfishFry] = useState([]);
const [indianBread, setIndianBread] = useState([]);
  const [tctCombos, setTctCombos] = useState([]);
  const [tctMealForTwos, setTctMealForTwos] = useState([]);
  const [tctBucket, setTctBucket] = useState([]);

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
    setSides(response.sides);
    setTctCombos(response.tctCombo);
    setTctMealForTwos(response.tctMealForTwo);
setIndianBread(response.indianBread);
    setGrillChicken(response.grillChicken);
    setCrispyChicken(response.crispyChicken);
    setStartersVeg(response.startersVeg);
    setStartersNonVeg(response.startersNonVeg);
    setFishStarters(response.fishStarters);
    setMainCourseNonVeg(response.mainCourseNonVeg);
    setMainCourseVeg(response.mainCourseVeg);
    setThali(response.thali);
    setfishFry(response.fishFry);
    setTctBucket(response.tctBucket);
  };

  useEffect(() => {
    fetch("/menu.json")
      .then((data) => data.json())
      .then((data) => {
        setMenueCategories(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
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
                <MenueCard itemList={sides} itemCategory="Sides" />

              </Column1>

              <Column2>
              <MenueCard itemList={grillChicken} itemCategory="Grill Chicken" />
              <MenueCard itemList={crispyChicken} itemCategory="Crispy Chicken" />

                
                <MenueCard itemList={tctCombos} itemCategory="TCT's Combos" />
                <MenueCard
                  itemList={tctMealForTwos}
                  itemCategory="Meal For Two"
                />
              <MenueCard itemList={tctBucket} itemCategory="TCT's Bucket" />

                <MenueCard itemList={soup} itemCategory="Soup" />
                <MenueCard itemList={dips} itemCategory="Delicious Dips" />
                <MenueCard itemList={dessert} itemCategory="Desserts" />
                <MenueCard itemList={iceCream} itemCategory="Ice Cream" />
              </Column2>
            </MenueGrid>

            {/* //! Bar Menue */}

            <HeadingImgWrap>
              <HeadingImg src={gk} />
            </HeadingImgWrap>

            
            <MenueGrid>
              <Column1>

              <MenueCard itemList={startersVeg} itemCategory="Starters Veg" />
              <MenueCard itemList={startersNonVeg} itemCategory="Starters Non Veg" />
              <MenueCard itemList={fishStarters} itemCategory="Fish Starters" />
              <MenueCard itemList={thali} itemCategory="Goan Thali" />
              <MenueCard itemList={indianBread} itemCategory="Indian Bread" />

              </Column1>

              <Column2>

              <MenueCard itemList={mainCourseVeg} itemCategory="Maincourse Veg" />
              <MenueCard itemList={mainCourseNonVeg} itemCategory="Maincourse Non Veg" />
              <MenueCard itemList={fishFry} itemCategory="Fish Fry (APS)" />
              
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
