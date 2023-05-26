import * as React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {Button, Container} from "@mui/material";



const Header = () => {

    return (
        <header>
            <Container maxWidth="xl" className={styles.header}>

                <div>
                    <Link to='/'>
                        BOOKING
                    </Link>
                </div>

                <nav>
                    <Link to='/'>
                        <Button>
                            Главная
                        </Button>
                    </Link>


                    <Link to='/history'>
                        <Button>
                            История
                        </Button>
                    </Link>


                    <Link to='/requests'>
                        <Button>
                            Заявки
                        </Button>
                    </Link>



                    <Link to='/login'>
                        <Button>
                            Вход
                        </Button>
                    </Link>


                    <Link to='/registration'>
                        <Button>
                            Регистрация
                        </Button>
                    </Link>
                </nav>

            </Container>
        </header>
    );
};

export default Header;