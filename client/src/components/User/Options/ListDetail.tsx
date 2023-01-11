import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "../../../style/User/Options/ListDetail.module.css";
import { useHistory } from "react-router-dom";
import {
  getAllListsUser,
  editListName,
  clearAllLists,
  deleteList,
  getList,
  clearDetailList,
  deleteAnimeInList,
  getAnimes,
  addListAnime
} from "../../../redux/actions/index";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { faTrash, faArrowLeft, faGear, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../NavBar/SearchBar";
import { useLocation } from "react-router-dom";
import { Anime } from "../../../types/types";
import Loading from "../../UtilsComponents/Loading";


export default function ListDetail() {
  const dispatch = useAppDispatch();

  const {id} = useParams();
  const history = useHistory();

  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  let name = searchParams.get('name') || '';

  const animesRender = useAppSelector((state) => state['animes']);
  const listDetail = useAppSelector(state => state.listDetail);
  const userInfo = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getList(id));
    dispatch(getAnimes(search));
    return () => {
      dispatch(clearDetailList())
    };
  }, [dispatch, id, search]);


  const [listEdit, setListEdit] = useState({
    name: '',
    id: 0
  });

  const [modalEdit, setModalEdit] = useState(false);

  const [menu, setMenu] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const changeEditNameHandler = (e: React.ChangeEvent<HTMLInputElement>, idList: number) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue = e.target.value;
    
    setListEdit({...listEdit, [inputName]: inputValue, id: idList })
  }

  const submitEditNameHandler = async () => {
    await dispatch(editListName(listEdit));
    await dispatch(clearDetailList());
    await dispatch(getList(id));
    setListEdit({
      name: '',
      id: 0
    });
    setModalEdit(!modalEdit);
  }

  const deleteHandler = async (id: number) => {
    await dispatch(deleteList(id));
    await dispatch(clearAllLists());
    await dispatch(getAllListsUser(userInfo.id));
    history.push('/profile/list');
  }


  const addAnimeToList = async (idAnime: number) => {
    const animeToAdd = {anime: idAnime, list: listDetail.id};
    setIsLoading(true);
    try {
      await dispatch(addListAnime(animeToAdd));
      await dispatch(clearDetailList());
      await dispatch(getList(id)).then(() => setIsLoading(false));
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false)
    }
  }

  const deleteAnimeList = async (idAnime: number) => {
    const animeToDel = {anime: idAnime, list: listDetail.id}
    setIsLoading(true);
    await dispatch(deleteAnimeInList(animeToDel));
    await dispatch(clearDetailList());
    await dispatch(getList(id)).then(() => setIsLoading(false));
  };


  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
    setListEdit({
      name: '',
      id: 0
    });
  }

  if(modalEdit) {
    document.body.classList.add(style['active-modal'])
  } else {
    document.body.classList.remove(style['active-modal'])
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className={style['div-principal-detail']}>
      <h1 className={style['titulo-list-detail']}>{listDetail.name}</h1>
      <div className={style['div-link-back']}>
        <div className={style['div-link-buttons']}>
          <Link className={style['div-link-back-link']} to="/profile/list">
            <button className={style['button-back']}>
              <FontAwesomeIcon icon={faArrowLeft} />
              Go back
            </button>
          </Link>
          <div className={style['div-input-search']}>
            <SearchBar styleWidth={true} searchName={name} />
          </div>
          <div className={style['div-options']}>
            <button onClick={toggleMenu} className={style['button-back']}>
              <FontAwesomeIcon icon={faGear} />
              Options
            </button>
            <div className={
              style['div_lists_span'] + " " + style[`${menu ? "isActive" : ""}`]
            }
            >
              <div onClick={toggleModalEdit} className={style['list-span']}>
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit name
              </div> 
              {
                modalEdit && (
                  <div className={style['modal']}>
                    <div onClick={toggleModalEdit} className={style['overlay']}></div>
                    <div className={style['modal-content']}>
                      <h2 className={style['title-modal']}>Edit Your List Here!</h2>
                      <div className={style['form-nicolas']}>
                        <input className={style['form-input']} onChange={e => changeEditNameHandler(e, id)} type="text" name="name" value={listEdit.name} placeholder="Type the new name of the list"></input>
                        <div className={style['div-buttons']}>
                          <button onClick={submitEditNameHandler} className={style['form-button-submit']} type="button">Edit</button>
                          <button onClick={toggleModalEdit} className={style['button-create-list-modal']} type="button">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
              }
              <div onClick={() => deleteHandler(id)} className={style['list-span-delete']}>
                <FontAwesomeIcon icon={faTrash} />
                Delete List
              </div> 
          </div>
        </div>
      </div>
      <div className={style['div-render-principal']}>
        {
          search.length ? animesRender.rows?.map((a: Anime, i: number) => {
            return (
              <div onClick={() => addAnimeToList(a.id ? a.id : 0)} className={style['div-render-anime']} key={i}>
                <div className={style['div-render-anime_div_img']}>
                  <img className={style['div-render-anime_img']} src={a?.posterImage} alt="img-anime" />
                </div>
                <span className={style['div-render-anime_name']}>{a?.name}</span>
              </div>
            );
          }) : null
        }
      </div>
      <div className={style['div-principal-anime']}>
        {
          !isLoading ? listDetail.animes?.map((anime, key) => {
            return (
              <div key={key} className={style['div-anime']}>
                <Link className={style['anime-detail_link']} to={`/watch/${anime.id}`} >
                  <img className={style['anime-detail_img']} src={anime.posterImage} alt="img-alt" />
                </Link>
                <div className={style['anime-detail_texts']}>
                  <h4 className={style['anime-detail_name']}>{anime.name}</h4>
                  <div className={style['div-spans-anime']}>
                    <span className={style['anime-detail_span']}>{anime.showType}</span>
                    <button onClick={() => deleteAnimeList(anime.id)} className={style['button-delete-anime']}><FontAwesomeIcon className={style['button-delete-anime-svg']} icon={faTrash} /></button>
                  </div>
                </div>
              </div>
            )
          }) :
          <div className={style['content-notFound']}>
            <Loading />
          </div>
        }
        {
          !listDetail.animes?.length && (
            <div>
              <h1>THERES NO ANIMES IN LIST</h1>
              <h2>ADD SOME</h2>
            </div>
          )
        }
      </div>
    </div>
    </div>
  )
}