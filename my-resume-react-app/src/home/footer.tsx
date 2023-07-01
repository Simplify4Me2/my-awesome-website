import { Box } from "@mui/material";

export function Footer() {
    return <Box sx={{ 
        flexGrow: 1, 
        backgroundColor: 'primary.light', 
        color: 'white' ,
        display: 'flex',
        justifyContent: 'center',
        p: 2
        }}>
        &copy; 2023 Vereecke inc. All rights reserved
    </Box>
}