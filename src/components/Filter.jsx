import React, { useRef } from 'react';
import "./Filter.css";
import { links } from '../assets/images.links';

function Filter({ selectedFilter, setSelectedFilter }) {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="filter-wrapper">
      <button onClick={() => scroll(-200)} className="scroll-btn left">‹</button>
      <div className="filter-div" ref={scrollRef}>
        {links.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i === selectedFilter ? 'selected-box' : ''}`}
            onClick={() => {
              console.log("selecting key", i);
              setSelectedFilter(item.label); // Set the selected filter to item.label or any unique identifier
            }}
          >
            <img src={item.imgSrc} className="links-img" alt={item.label} />
            <p className={`links-label ${i === selectedFilter ? 'selected-label' : ''}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => scroll(200)} className="scroll-btn right">›</button>
    </div>
  );
}

export default Filter;
