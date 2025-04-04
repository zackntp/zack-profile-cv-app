import React from 'react'
import { Box,Typography } from '@mui/material'
function TechBoxComponent(props) {
  return (
    <>
      <Box  sx={{
                        border:"1px solid white",
                        backgroundColor:'transparent',
                        borderRadius:5,
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'center',
                        width:'auto',
                        height:'40px',
                        mr:'10px',
                        padding:'15px'
    
                    }}>
                    <Typography>
                        {props.text}
                    </Typography>
                    </Box>
    </>
  )
}

export default TechBoxComponent