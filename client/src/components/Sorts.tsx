import React from "react"
import parseQuery from "../utils/parseQuery";
import style from '../style/Sorts.module.css';
import { useHistory } from "react-router-dom";
interface Sort {
    query: string,
    sort: string
}
export default function Sorts ({query, sort}:Sort) {
    // const [sorts, setSorts] = useState("");
    // const [showSort, setShowSort] = useState(false);
 
    let history = useHistory();
    let changeOption = (e: React.MouseEvent<HTMLSelectElement>, type: string) => {
        e.preventDefault();

        let paramValue = (e.target as HTMLInputElement).value;
        let paramName = (e.target as HTMLInputElement).name;

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