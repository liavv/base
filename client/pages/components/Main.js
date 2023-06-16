import { Button, TextField } from '@material-ui/core';
import SortableList from "./SortableList";
import axios from 'axios';
import { useState } from 'react';
import Product from './Product';

const Main = (props) =>{
    console.log('2',props.list)
    const [itemList,setItemList] = useState([]);
  
    const handleList = (list) =>{
        console.log('1',list.data.data)
        setItemList(list.data.data);
    }
    
    return(
        <>
            <Product handleList={handleList}></Product>
            <SortableList list={itemList.length===0 ? props.list : itemList} />
        </>
    );
};

export default Main;