import DrinksList from "../components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b";

const fetchDrinks = async () => {
  // 1 second timeout to showcase the loading element
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  //throw error
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};
export default DrinksPage;
