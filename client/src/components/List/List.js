import React, {useState} from 'react';
import {Button, TextField, Typography} from '@material-ui/core';
import './List.css';

function List(){
    let [listItem, setListItem] = useState([]);
    let formValue = 0;

    const setFormValue = (change) =>{
        formValue = change;
    }

   const handleSubmit=(e)=>{
        e.preventDefault();
        setListItem(listItem => {
            let old = [...listItem];
            old.push(formValue);
            return old;
        });

    }

    const handleChange=(e)=>{
        e.preventDefault();
        setFormValue(e.target.value);
    }

   const handleKeyPress=(e)=>{
        if (e.key === 'Enter'){
            e.preventDefault();
            handleSubmit(e);
            e.target.value = '';
        }
    }

    const handleRemove=(i)=>{
        setListItem(listItem => {
            let old = [...listItem];
            old.splice(i,1);
            return old;
        });
    }


    const getListItems=()=>{
        let items = [ ];
        for(let i=0;i<listItem.length;i++){
            items.push(
                <p>
                    {listItem[i]}
                    <Button onClick={() => handleRemove(i)}>x</Button>
                </p>
            )
        }
        //console.log("returning items soon:" + items);

        return items;
    }
    return(
        <div className="list">
            <Typography variant="h2"> A Minimal Grocery List </Typography>
            <img src="https://static.vecteezy.com/system/resources/previews/000/154/191/non_2x/shopping-grocery-vector.jpg" width="300" height="170"/>
            <form noValidate autoComplete="off">
                <TextField id = "outlined" label="Enter Item" color="secondary"onChange={handleChange}  onKeyDown={handleKeyPress}/>
            </form>
            {getListItems()}
            <Button variant="contained" color="secondary" onClick={handleSubmit} type="submit"> Add </Button>
        </div>
    )
}

export default List;