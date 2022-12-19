import React from "react"
import parseQuery from "../utils/parseQuery";
import style from '../style/Sorts.module.css';
import { useHistory } from "react-router-dom";
export default function Sorts ({query, sort}) {
    // const [sorts, setSorts] = useState("");
    // const [showSort, setShowSort] = useState(false);
 
    let history = useHistory();
    let changeOption = (e, type) => {
        e.preventDefault();

        let paramValue = e.target.value;
        let paramName = e.target.name;

        if (sort === paramValue) {
            paramValue = '';
            let params = parseQuery(query, paramValue, paramName, type );
            history.push(`/animes?${params}`);
    
          } else {
            let params = parseQuery(query, paramValue, paramName, type);
            history.push(`/animes?${params}`);
   
          }
      };
    return (
        <div className={style['sorts']}>
            <label htmlFor="alphabetic" style={{color:'white'}}>Alphabetic:</label>
            <select name="sort" id={'alphabetic'} onClick={(e)=> changeOption(e, 'sort')}>
                <option value={'ASC'} >Asc</option>
                <option value={'DESC'} >Desc</option>
            </select>
        </div>
    )
}