import React, { useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import {arrayMoveImmutable} from "array-move";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from 'styled-components';
import { useEffect } from "react";

const SortableList = (props) => {
    const {list} = props;
    console.log('list sortable',list)
    const [items, setItems] = useState([]);

    const onDrop = ({ removedIndex, addedIndex }) => {
        setItems(items => arrayMoveImmutable(items, removedIndex, addedIndex));
    };
    useEffect(()=>{
      setItems(list);
    },[])
    return (
        <Wrapper>
        <List>
            <Container dragHandleSelector=".drag-handle" lockAxis="y" onDrop={onDrop}>
                {items.map(({ id, text }) => (
                    <Draggable key={id}>
                        <ItemWrapper>
                            <ItemInside>
                            <ListItem className="drag-handle">
                                <ListItemText classes={{root: 'item-text-root'}} primary={text} />



                        </ListItem>
                            </ItemInside>
                        </ItemWrapper>
                    </Draggable>
                ))}
            </Container>
        </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 80%;
  margin:auto;
  .item-text-root{
    text-align: right;
  }
`;
const ItemInside = styled.div`
  width:50%;
  margin:auto;
`;
const ItemWrapper = styled.div`
    display:flex;
    flex-direction: row;
  cursor: pointer;
  border: 1px solid;
  margin: 10px 10px;
  border-radius: 5px;
  .drag-handle{
    text-align: right;
  }
   
`;
export default SortableList;