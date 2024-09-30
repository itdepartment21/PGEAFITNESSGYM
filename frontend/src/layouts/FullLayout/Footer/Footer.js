import React from 'react'
import {
    Box,
    Link,
    Typography,
    
  } from "@mui/material";
const Footer = () => {
    return ( 
        <Box sx={{p:3, textAlign:'center'}}>
            <Typography>© 2024 All rights reserved by <Link href="https://polomolok.gov.ph/">polomolok.gov.ph</Link> </Typography>
        </Box>
     );
}
 
export default Footer;