import { DogResponse } from "./model/Dogs";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Array tipado con interface
export async function getRandomDogImage(
  breed: string
): Promise<DogResponse | undefined> {
  const url =
    breed === ""
      ? "https://dog.ceo/api/breeds/image/random"
      : `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return {
      id: Date.now() + Math.random(),
      breed,
      imgUrl: json.message,
      dislikeCount: getRandomInt(0, 2),
      likeCount: getRandomInt(0, 1),
    };
  } catch (error: any) {
    console.error(error.message);
  }

  return undefined;
}

//Ejemplo de array tipado sin interface
export async function getBreeds(): Promise<string[] | undefined> {
  const url = "https://dog.ceo/api/breeds/list/all";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: { message: Record<string, string[]> } = await response.json(); //El message es lo que devuelve la api

    return Object.keys(json.message); //El objetc.keys es lo que devolvemos nosotros y es un array de string
  } catch (error: any) {
    console.error(error.message);
  }
}
