export default async function useGithubData(username) {
  const URL = "https://api.github.com/users/" + username;
  try {
      const fetchedData = await fetch(URL);
      const json = await fetchedData.json();
      return json;
    } catch (err) {
      console.error(err);
    }
}