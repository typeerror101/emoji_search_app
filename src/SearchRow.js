import React from 'react'
import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchRow({emoji}) {
  return (
    <div>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <IconButton color="primary" size='large'>
        <SearchIcon fontSize='large'/>
        </IconButton>
        
    </div>
  )
}
