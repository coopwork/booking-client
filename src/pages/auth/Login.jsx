import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {Button, Card, FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styles from "./Auth.module.scss"

const Login = () => {
    const { t } = useTranslation();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        document.title = t('login_page');
    }, [t]);

    return (
        <div className={styles.center_form}>
            <Card className={styles.login_form}>

                <h3>Вход</h3>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Login" variant="standard" />
                        <AccountCircle sx={{ color: 'action.active', ml: 1, my: 0.5 }} />
                    </Box>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button sx={{mt: 4, mb: 2}} variant="outlined">Войти</Button>

            </Card>
        </div>
    );
};

export default Login;