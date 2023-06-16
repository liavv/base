import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
const Product = ({handleList})=>{

    const [newProductName,setNewProductName] = useState("");
    const handleProductName = (e) =>{
        setNewProductName(e.target.value);
    };
    const addItem= async ()=>{
        const item = { productName: newProductName };
        const response = await axios.post('./api/v1/get-data/list', item);
        handleList(response.data);
      }
      
    return(
        <>
            <TextField onChange={handleProductName} id="outlined-basic" label="מוצר  חדש" variant="outlined" />
            <Button onClick={addItem} variant="contained">הוסף</Button>
        </>
    );
};
export default Product;