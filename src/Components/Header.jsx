import { RocketLaunch, Search, ShoppingBasket } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function Header(){
    return(
    <AppBar
    position="static"
    >
        <Toolbar>
            <Typography 
                variant="h6"
                component="span"
                sx={{flexGrow: 0}}
            >   
            Гостинница космос
            </Typography>
            <IconButton
                color="inherit"
                sx={{flexGrow: 0}}
            >
            <RocketLaunch />
            </IconButton>
            <Search>
            </Search>
         
        </Toolbar>

    </AppBar>
    )
}

export default Header;