// MarkerContext.js
import React, { createContext, useContext, useState } from 'react';

const MarkerContext = createContext();

export const useMarker = () => useContext(MarkerContext);

export const MarkerProvider = ({ children }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const closeOverlay = () => {
    setSelectedMarker(null);
  };

  return (
    <MarkerContext.Provider value={{ selectedMarker, handleMarkerClick, closeOverlay }}>
      {children}
    </MarkerContext.Provider>
  );
};