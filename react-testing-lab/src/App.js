import React from "react";
import AppContainer from "./components/AppContainer.js";

export const displayContent = [
  {
    id: Date.now(),
    name: "Friedrich Nietzsche",
    book: "Além do bem e do mal",
    photo:
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: Date.now(),
    name: "Imannuel Kant",
    book: "Crítica da RazãoPura",
    photo:
      "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: Date.now(),
    name: "Sócrates",
    book: "Fédon",
    photo:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    id: Date.now(),
    name: "Michael Oakeshott",
    book: "Rationalism in Politics",
    photo:
      "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: Date.now(),
    name: "Roger Scruton",
    book: "The Face of God",
    photo:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: Date.now(),
    name: "William Shakespeare",
    book: "Hamlet",
    photo:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    id: Date.now(),
    name: "Martin Heidegger",
    book: "Ser e Tempo",
    photo:
      "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: Date.now(),
    name: "Ortega y Gasset",
    book: "A Rebelião das Massas",
    photo:
      "https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
  },
];
export function App() {
  return (
    <div>
      <AppContainer fotos={displayContent} />
    </div>
  );
}

export default App;
