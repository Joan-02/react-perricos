import { useState } from "react";
import "./App.css";

interface Dog {
  imgURL: string;
  like: number;
  dislike: number;
}

function App() {
  const [dogList, setDogList] = useState<Dog[]>([
    {
      imgURL:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnJvfGVufDB8fDB8fHww",
      like: 0,
      dislike: 0,
    },
  ]);

  return (
    <>
      <button>Add perrico</button>
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
