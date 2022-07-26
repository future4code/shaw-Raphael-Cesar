import React, { useContext, useState } from "react"
import { Button, CardMedia, TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from "@mui/material";
import Logo from '../../assets/logo-preta.png'
import { Container } from "./styled";
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/material';
import clsx from 'clsx';
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { goToRegister } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnProtectedPage";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '85%',
        },
    },
    margin: {
        margin: theme.spacing(1),
        width: '85%',

    },
    withoutLabel: {
        marginTop: theme.spacing(1),
        width: '85%',
        textTransform: "none",
    },
    botao: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    useUnprotectedPage()

    const [form, onChange] = useForm(
        {
            email: "",
            password: ""
        }
    )
    const { requests } = useContext(GlobalStateContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)


    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        requests.requestLogin(form, navigate, setLoading)
    }


    return (
        <Container>
            <CardMedia
                component="img"
                image={Logo}
                alt="pokemons"
            />


            {
                loading
                    ?
                    <>
                        <CircularProgress />
                        <h1>Carregando</h1>
                    </>
                    : <>
                        <p>Entrar</p>
                        <form className={classes.root} noValidate autoComplete="on" onSubmit={handleSubmit}>

                            <TextField
                                type="email"
                                id="filled-textarea"
                                value={form.email}
                                name='email'
                                onChange={onChange}
                                label="E-mail"
                                placeholder="email@email.com"
                                multiline
                                variant="outlined"
                                required
                            />

                            <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Mínimo: 6 caracteres"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={form.password}
                                    name='password'
                                    onChange={onChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                    required
                                />
                            </FormControl>
                            <>
                                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit">
                                    Entrar
                                </Button>
                                <Button color="#000000" className={classes.botao} onClick={() => goToRegister(navigate)}>
                                    Não possui cadastro? Clique aqui
                                </Button>
                            </>
                        </form >

                    </>
            }
        </Container>


    )
}

export default LoginPage