import { useState, ChangeEvent, useEffect } from "react";
import "./App.css";
import { getBreeds, getRandomDogImage } from "./services/dog.service";

interface Dog {
  imgURL: string;
  like: number;
  dislike: number;
}

function App() {
  const [breed, setBreed] = useState("");
  const [allBreeds, setAllBreeds] = useState<string[]>([]);
  const [dogList, setDogList] = useState<Dog[]>([]);

  const handleClickStart = async () => {
    const dog = await getRandomDogImage(breed);
    if (dog) {
      setDogList([
        {
          imgURL: dog.imgUrl,
          like: dog.likeCount,
          dislike: dog.dislikeCount,
        },
        ...dogList,
      ]);
    }
  };

  const handleClickEnd = async () => {
    const dog = await getRandomDogImage(breed);
    if (dog) {
      setDogList([
        ...dogList,
        {
          imgURL: dog.imgUrl,
          like: dog.likeCount,
          dislike: dog.dislikeCount,
        },
      ]);
    }
  };

  const handleBreedChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setBreed(event.target.value);
  };

  useEffect(() => {
    const fetchAllBreeds = async () => {
      const breeds = await getBreeds();
      if (breeds) {
        setAllBreeds(breeds);
        setBreed(breeds[0]);
      }
    };
    fetchAllBreeds();
  }, []);

  return (
    <>
      <div className="header">
        <div className="breed-picker">
          Selecciona la raza de perro que quieres añadir
          <select value={breed} onChange={handleBreedChange}>
            {allBreeds.map((breed) => {
              return <option value={breed}>{breed}</option>;
            })}
          </select>
        </div>
        <div className="buttons">
          <button onClick={handleClickStart}>Add perrico al principio</button>
          <button onClick={handleClickEnd}>Add perrico al final</button>
        </div>
      </div>
      <div className="dog-list">
        {dogList.map((dog) => {
          return (
            <div className="dog-card">
              <img src={dog.imgURL} alt="" />
              <div className="dog_votes">
                <span className="count-like">{dog.like}❤️</span>
                <span className="count-dislike">{dog.dislike}🤮</span>
              </div>
              <div className="dog_buttons">
                <button className="button-like">Like perrico</button>
                <button className="button-dislike">Dislike perrico</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
