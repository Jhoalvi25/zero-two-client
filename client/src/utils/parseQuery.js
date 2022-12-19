export default function parseQuery (query, paramValue, paramName, type, subType) {
    // console.log('PARAMS LENGTH', params.length)
    // console.log('params', params)
    query = new URLSearchParams(query)

    // console.log('PARAM', params)
    if (type === 'filters') {
        if(paramValue.length) {
            
            query.set(paramName, paramValue);
            query.set('page', 1)
            query = decodeURIComponent(query);
            
            return query
        }  else {
            query.delete(paramName)
            query = decodeURIComponent(query);
            return query
        }
    }

    if (type === 'page') {

        let page = Number(paramValue)
    
        if(subType === "prev") {
            query = new URLSearchParams(query);
            query.set('page', page -1)
            query = decodeURIComponent(query)
            return query
        } else if(subType === "next") {
            query = new URLSearchParams(query);
            query.set('page', page +1);
            query= decodeURIComponent(query);
            return query;
        } else {
            query = new URLSearchParams(query);
            query.set('page', page || 1);
            query = decodeURIComponent(query)
            return query;
        }
    }

    if (type === 'sort') {
       
        if(paramValue.length) {
            query.set(paramName, paramValue);
            query.set('page', 1)
            query = decodeURIComponent(query);
            // console.log(query)
            return query;
        }
        else {
            query.delete(paramName)      
            query = decodeURIComponent(query);
            return query;
        }
            
    } 
    if (type === 'search') {
       
        if(paramValue.length) {
            query.set(paramName, paramValue);
            query = decodeURIComponent(query);
            return query;
        }
        else {
            query.delete(paramName)      
            query = decodeURIComponent(query);
            return query;
        }
            
    }else {
        // console.log('g', query)
        query = decodeURIComponent(query);
        return query;
    }
}