import { useEffect } from "react";
import Carousel from "./Carousel";
import SectionHomeUno from "./SectionHomeUno";
import SectionHomeDos from "./SectionHomeDos";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  createList,
  getAllListsUser,
  getAnimeNewest,
  getAnimes,
  getAnimeTrending,
} from "../../redux/actions";

export default function Home() {
  const dispatch = useAppDispatch();
  const allLists = useAppSelector(state => state["userLists"]);
  const userInfo = useAppSelector((state) => state.user);


  const reReturn = () => {
    return;
  }

  useEffect(() => {
    dispatch(getAnimes(""));
    dispatch(getAnimeNewest("?page=1"));
    dispatch(getAnimeTrending("?page=1"));
    dispatch(getAllListsUser(userInfo.id));
    !allLists.find(list => list.name === 'Favorites') 
    ? dispatch(createList({name: 'Favorites', email: userInfo.email}))
    : reReturn()

  }, [userInfo.id, userInfo.email]);

  return (
    <div>
      <Carousel />
      <SectionHomeUno />
      <SectionHomeDos />
    </div>
  );
}
