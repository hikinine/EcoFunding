import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styled from 'styled-components';

const Mapadiv = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: justify;
    align-items: justify;
    
    
`;
const geoUrl = 'https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/196c0332d38cb935cfca227d28f7cecfa70b412e/br-states.json';
function Mapa() {
    return (
        <Mapadiv>
            <ComposableMap data-tip="">
                
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                            />
                        ))
                    }
                </Geographies>
                
            </ComposableMap>
        </Mapadiv>
    );
}

export default Mapa;
