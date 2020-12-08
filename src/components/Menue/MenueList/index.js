import React, { useEffect, useState } from "react";
import { MenueTitle, MenueWrapper } from "../MenuePageComponents";
import Axios from "axios";
const MenueList = () => {
  const [burgerList, setBurgerList] = useState([]);
  const [fishThaliList, setFishThali] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/menue.json").then((response) => {
      setBurgerList(response.data.burger);

      setFishThali(response.data.fishThali);
    });
  }, []);

  return (
    <MenueWrapper>
      <MenueTitle>Our Menue</MenueTitle>
      <ul>
        {fishThaliList.map((item) => (
          <li key={item.id}>
            {item.itemName} - {item.itemPrice}
          </li>
        ))}
      </ul>
    </MenueWrapper>
  );
};

export default MenueList;
