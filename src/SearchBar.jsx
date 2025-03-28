import React from 'react'
import { useRef, useState } from 'react'
import { useJsApiLoader, Autocomplete} from '@react-google-maps/api'
import { motion } from 'framer-motion';

const libs = ['places']

const SearchBar = ({city, setCity}) => {
    const inputRef = useRef(null)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        libraries:libs
      })

    const handleOnPlacesChanged = () => {
        const place = inputRef.current.getPlace()
        if (place && place.address_components) {
            const cityName = place.address_components[0].long_name +","+place.address_components[2].short_name
            setCity(cityName)
        }
    }



  return (
    <div >
        {isLoaded && (
            <Autocomplete
                onLoad={(ref) => (inputRef.current = ref)}
                onPlaceChanged={handleOnPlacesChanged}
                options={{
                    types: ['(cities)'], 
                    componentRestrictions: { country: "us" }
                }}
            >
                <motion.input
                    type="text"
                    className="searchbar"
                    placeholder="Enter a city..."
                    animate={city ? { y: 15, x:-300 } : { y:130, x:-300  }}
                    transition={{ duration: 0, ease: "linear" }}
                />
            </Autocomplete>
        )}
    </div>
    
  )
}

export default SearchBar