import React, { useEffect } from "react";
import { AppBar, BottomNavigationAction, BottomNavigation } from "@mui/material";
import { makeStyles } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { goToCart, goToHome, goToProfile } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        top: 'auto',
        bottom: 0,
        padding: 0,
        width: "100%",
    },
});

const Footer = () => {
    const location = useLocation()
    const history = useNavigate()
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (location.pathname === "/home") {
            setValue(0)
        } else if (location.pathname === "/carrinho") {
            setValue(1)
        } else if (location.pathname === "/perfil") {
            setValue(2)
        }

    }, [location.pathname])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <footer>
            {
                location.pathname === "/home" || location.pathname === "/carrinho" || location.pathname === "/perfil" ?
                    <AppBar className={classes.root} position="fixed">
                        <BottomNavigation value={value} onChange={handleChange} showLabels >
                            <BottomNavigationAction icon={<HomeOutlinedIcon fontSize="large" />} onClick={() => goToHome(history)} />
                            <BottomNavigationAction icon={<ShoppingCartOutlinedIcon fontSize="large" />} onClick={() => goToCart(history)} />
                            <BottomNavigationAction icon={<PersonOutlineOutlinedIcon fontSize="large" />} onClick={() => goToProfile(history)} />
                        </BottomNavigation>
                    </AppBar> : <></>
            }
        </footer>
    )
}

export default Footer