import { useState, ChangeEvent } from "react";
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
  const [dogList, setDogList] = useState<Dog[]>([
    {
      imgURL:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnJvfGVufDB8fDB8fHww",
      like: 0,
      dislike: 0,
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnJvfGVufDB8fDB8fHww",
      like: 2,
      dislike: 3,
    },
  ]);

  const handleClickStart = async () => {
    const dog = await getRandomDogImage("");
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
    const dog = await getRandomDogImage("");
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

  const fetchAllBreeds = async () => {
    const breeds = await getBreeds();
    if (breeds) {
      setAllBreeds(breeds);
    }
  };

  return (
    <>
      <div className="breed-picker">
        Selecciona la raza de perro que quieres añadir
        <select value={breed} onChange={handleBreedChange}>
          {allBreeds.map((breed) => {
            return <option value={breed}>{breed}</option>;
          })}
        </select>
      </div>
      <button onClick={handleClickStart}>Add perrico al principio</button>
      <button onClick={handleClickEnd}>Add perrico al final</button>
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
