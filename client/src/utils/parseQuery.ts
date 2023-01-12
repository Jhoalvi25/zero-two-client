

export default function parseQuery(
  query: string | URLSearchParams,
  paramValue: string[] | string ,
  paramName: string,
  type: string,
  subType?: string | undefined
) {

  query = new URLSearchParams(query);


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

    query = query.toString();
    query = decodeURIComponent(query);
    return query;
  }
}
