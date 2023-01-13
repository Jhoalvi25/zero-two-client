export default function parseQueryPage(
  query: string | URLSearchParams,
  paramValue: number,
  paramName: string,
  type: string,
  subType?: string | undefined
) {
  if (type === "page") {
    let page: number | string = Number(paramValue);

    if (subType === "prev") {
      query = new URLSearchParams(query);
      page = page - 1;
      page = page.toString();
      query.set("page", page);
      query = query.toString();
      query = decodeURIComponent(query);
      return query;
    } else if (subType === "next") {
      page = page + 1;
      page = page.toString();
      query = new URLSearchParams(query);
      query.set("page", page);
      query = query.toString();

      query = decodeURIComponent(query);
      return query;
    } else {
      query = new URLSearchParams(query);
      page = page || 1;
      page = page.toString();
      query.set("page", page);
      query = query.toString();
      query = decodeURIComponent(query);
      return query;
    }
  }
}
