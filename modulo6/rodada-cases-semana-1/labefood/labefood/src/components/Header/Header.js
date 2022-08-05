import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToHome, goToLogin, goToProfile } from '../../router/coordinator'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { makeStyles } from '@mui/material';
import { IconButton, Toolbar, AppBar } from '@mui/material';
import { Container } from './styled';

const useStyles1 = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Header = () => {
    const classes1 = useStyles1();
    const history = useNavigate()
    const location = useLocation()
    const token = localStorage.getItem("token")

    const homeHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <h4>FutureEats</h4>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const registerHeader = () => {
        return (
            <Container>
                {
                    token ? <header>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu" onClick={() => goToProfile(history)} >
                                    <ArrowBackIosNewIcon  />
                                </IconButton>
                                <p>Editar</p>
                            </Toolbar>
                        </AppBar>
                    </header> :
                        <header>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu" onClick={() => goToLogin(history)} >
                                        <ArrowBackIosNewIcon  />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </header>
                }
            </Container>
        )
    }

    const addressHeader = () => {
        return (
            <Container>
                {
                    token ?
                        <header>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu" onClick={() => goToProfile(history)} >
                                    <ArrowBackIosNewIcon  />
                                    </IconButton>
                                    <p>Endereço</p>
                                </Toolbar>
                            </AppBar>
                        </header>
                        : <header>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu" onClick={() => goToLogin(history)}>
                                        <ArrowBackIosNewIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </header>
                }
            </Container>
        )
    }

    const searchHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu" onClick={() => goToHome(history)} >
                                <ArrowBackIosNewIcon />
                            </IconButton>
                            <p>Busca</p>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const cartHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <h4>Meu carrinho</h4>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const profileHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <h4>Meu perfil</h4>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const initialHeader = () => {
        return (
            <></>
        )
    }

    const loginHeader = () => {
        return (
            <></>
        )
    }

    const restaurantDetailsHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu" onClick={() => goToHome(history)}>
                                <ArrowBackIosNewIcon/>
                            </IconButton>
                            <p>Restaurante</p>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const changeHeader = () => {

        switch (location.pathname) {
            case '/home':
                return homeHeader();
            case '/cadastro':
                return registerHeader()
            case '/cadastrar-endereco':
                return addressHeader();
            case '/busca':
                return searchHeader();
            case '/carrinho':
                return cartHeader()
            case '/perfil':
                return profileHeader();
            case '/':
                return initialHeader()
            case '/login':
                return loginHeader()
            default:
                return restaurantDetailsHeader()
        }
    }

    return (
        <>{changeHeader()}</>
    )
}

export default Header