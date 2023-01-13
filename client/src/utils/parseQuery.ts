

export default function parseQuery(
  query: string | URLSearchParams,
  paramValue: string[] | string ,
  paramName: string,
  type: string,
  subType?: string | undefined
) {
  // console.log('PARAMS LENGTH', params.length)
  // console.log('params', params)
  query = new URLSearchParams(query);

  // console.log('PARAM', params)
  if (type === "filters") {
    if (paramValue.length) {
      paramValue =
        typeof paramValue === "string" ? paramValue : paramValue.join(",");

      query.set(paramName, paramValue);
      query.set("page", "1");
      query = query.toString();
      query = decodeURIComponent(query);

      return query;
    } else {
      query.delete(paramName);
      query = query.toString();
      query = decodeURIComponent(query);
      return query;
    }
  }

  

  if (type === "sort") {
    if (paramValue.length) {
      paramValue =
        typeof paramValue === "string" ? paramValue : paramValue.join(",");

      query.set(paramName, paramValue);
      query.set("page", "1");
      query = query.toString();
      query = decodeURIComponent(query);
      // console.log(query)
      return query;
    } else {
      query.delete(paramName);
      query = query.toString();

      query = decodeURIComponent(query);
      return query;
    }
  }
  if (type === "search") {
    if (paramValue.length) {
      paramValue =
        typeof paramValue === "string" ? paramValue : paramValue.join(",");

      query.set(paramName, paramValue);
      query = query.toString();
      query = decodeURIComponent(query);
      return query;
    } else {
      query.delete(paramName);
      query = query.toString();
      query = decodeURIComponent(query);
      return query;
    }
  } else {
    // console.log('g', query)
    query = query.toString();
    query = decodeURIComponent(query);
    return query;
  }
}
