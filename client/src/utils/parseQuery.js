export default function parseQuery (query, params, type) {
    if (params.length) {
        if (type === 'genres') {
        
            query = new URLSearchParams(query);
            query.set(type, params);
            query = decodeURIComponent(query);
    
            return query
            
        }
       if (type === 'sort') {
    
            query = new URLSearchParams(query);
            query.set('sort', params)
            query = decodeURIComponent(query);
            // console.log(query)
            return query;
            
        } else {
            query = new URLSearchParams(query);
            query = decodeURIComponent(query);
            return query;
        }
    } else {
        return '';
    }
    
}