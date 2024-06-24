import { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Cards from './components/CardSwipe';
import { list as cardList } from './assets/cards-list'; // Import the cards list here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Filter cards based on selected filter
  const filteredCards = selectedFilter !== null
    ? cardList.filter(card => card.category === selectedFilter)
    : cardList;

  return (
    <div className="App">
      <Header />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Cards cards={filteredCards} /> {/* Pass filtered cards to Cards component */}
    </div>
  );
}

export default App;



