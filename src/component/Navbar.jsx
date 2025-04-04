import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>
    <AppBar position='static' sx={{bgcolor:'#fd9805'}}>
        <Toolbar>
            <Typography sx={{
                fontSize:'25px',
                flexGrow:'1'
            }}>
                NUTTAPONG SINGPHAN
            </Typography>
            <Typography sx={{
                mr:'10px'
            }}>
                Work
            </Typography>
            <Link to='about' smooth={true} duration={500}>
            <Typography sx={{
                mr:'10px',
                cursor:'pointer'
            }}>
                About
            </Typography>
            </Link>
            <Typography>
                Contact
            </Typography>
        </Toolbar>

    </AppBar>
    </>
  )
}

export default Navbar