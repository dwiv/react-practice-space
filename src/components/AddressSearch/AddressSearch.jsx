import React from 'react';
import { TextField } from '@material-ui/core'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

import styles from './AddressSearch.module.css';

const AddressSearch = () => {
    const [address, setAddress] = React.useState('');

    const handleSelect = async (value) => {

    }
    return (
        <div>
            <h2>Address Search</h2>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div>
                    <TextField id='filled-used' {...getInputProps({placeholder: 'Type Address'})} variant='filled' label='Address'/>
                    <div>
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
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}

export default AddressSearch