// MarkerContext.js
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Earth } from './index';
import markersData from './markers'; // Renamed to avoid naming conflict

const MarkerContext = createContext();


export const useMarker = () => useContext(MarkerContext);

export const MarkerProvider = ({ children }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState(markersData); // Use markersData here
  const handleMarkerClick = (marker) => {
    alert("Marker")
    setSelectedMarker(marker);
  };

  const closeOverlay = () => {
    setSelectedMarker(null);
  };

  return (
    <MarkerContext.Provider value={{ markers, selectedMarker, handleMarkerClick, closeOverlay }}>
      {children}
    </MarkerContext.Provider>
  );
};