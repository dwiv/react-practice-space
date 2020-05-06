import React from 'react';
import { TextField } from '@material-ui/core'

import styles from './AddressSearch.module.css';

const AddressSearch = () => {
    return (
        <div>
            <h2>Address Search</h2>
            <form>
                <TextField id='filled-basic' label='Input your address' variant='filled'/>
            </form>
        </div>
    )
}

export default AddressSearch