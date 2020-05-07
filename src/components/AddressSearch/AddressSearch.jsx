import React from 'react';
import { TextField } from '@material-ui/core'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

import styles from './AddressSearch.module.css';

const AddressSearch = () => {
    const [address, setAddress] = React.useState('');
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });
    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
    }
    return (
        <div className={styles.container}>
            <h2>Address Search</h2>
            <PlacesAutocomplete className={styles.searchBar} value={address} onChange={setAddress} onSelect={handleSelect}>
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div>
                    <TextField id='filled-used' {...getInputProps({placeholder: 'Type Address'})} variant='filled' label='Address'/>
                    <div className={styles.searchBar}>
                        {loading ? <div>...loading</div>: null}
                        {suggestions.map((suggestion) => {
                            const style = {
                                backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
                            }

                            return (
                                <div {...getSuggestionItemProps(suggestion, {style})}>
                                    {suggestion.description}
                                </div>
                            )
                        })}
                        <div className={styles.bumper}></div>
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}

export default AddressSearch