import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import styles from "./Auth.module.scss";
import {Button, Card, FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const Registration = () => {
    const { t } = useTranslation();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        document.title = t('registration_page');
    }, [t]);

    return (
        <div className={styles.center_form}>
            <Card className={styles.login_form}>

                <h3>Регистрация</h3>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="email" label="Email" type="email" variant="standard" />
                        <AccountCircle sx={{ color: 'action.active', ml: 1, my: 0.5 }} />
                    </Box>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="firstname" label="Имя" variant="standard" />
                        <AccountCircle sx={{ color: 'action.active', ml: 1, my: 0.5 }} />
                    </Box>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="lastname" label="Фамилия" variant="standard" />
                        <AccountCircle sx={{ color: 'action.active', ml: 1, my: 0.5 }} />
                    </Box>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
                    <Input
                        id="password"
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

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Повторите пароль</InputLabel>
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

                <Button sx={{mt: 4, mb: 2}} variant="outlined">Зарегистрироваться</Button>

            </Card>
        </div>
    );
};

export default Registration;