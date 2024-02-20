import Styled from 'styled-components';

const Container = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9); // Add a background color for visibility
    z-index: 9999; // Ensure it's above other content
`;

function Overlay({ onClose, marker }) {
    return (
        <div className="overlay" style={{ position: 'absolute', zIndex: 10 /* Adjust styling as needed */ }}>
            <button onClick={onClose}>Close</button>
            <h2>{marker.name}</h2>
            <img src={marker.imageUrl} alt={marker.name} />
        </div>
    );
}

export default Overlay;
