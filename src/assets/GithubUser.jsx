import useSWR from "swr";

function GithubUser() {
  async function DataFetch() {
    try {
      const response = await fetch(`https://api.github.com/users/Camrotez`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(newError(error));
    }
  }
  const { data, error } = useSWR(`https://api.github.com/users/Camrotez`,DataFetch);
  
  return (
    <>
      {!data? <p>loading...</p> : <ul>{data.map((item, index) =><li key={item + index}>{item.id}</li>)}</ul>}
    </>
  );
}
export default GithubUser

//non capisco perchè mi porta "DATA.MAP IS NOT A FUNCTION"