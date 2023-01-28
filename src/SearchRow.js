import React from 'react'
import { TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchRow() {
  return (
    <div>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <Button variant="contained" color="success">
        <SearchIcon />
        </Button>
        
    </div>
  )
}
