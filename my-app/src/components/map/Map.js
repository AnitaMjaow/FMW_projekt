import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MAPS_API_KEY } from '../../api'

const containerStyle = {
    width: '400px',
    height: '400px',
};

const Map = ({
    searchData
}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)
    
    //debug stuff
    if(map === "21"){
        console.log();
    }

    const onLoad = React.useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    //latitude and longitude, where you are on the map
    let lat;
    let lng;

    if (searchData?.value) {
        const [searchedLat, searchedLong] = searchData ? searchData?.value.split(" ") : [];
        lat = Number(searchedLat);
        lng = Number(searchedLong);
    }

    return isLoaded && lat && lng ? (
        <div style={{ display: 'flex', justifyContent: 'left', paddingTop: '12px', paddingBottom: '12px' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    lat,
                    lng
                }}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>
    ) : <></>
}

export default React.memo(Map)