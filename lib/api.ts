export async function fetchAPI(path) {
  const apibaseurl = "https://api.themoviedb.org/3/";
  const apikey = "2e69124c225cfc37de3c70f9ca8236be";
  const response = await fetch(apibaseurl + path + "&api_key=" + apikey);
  const data = await response.json();
  return data;
}
