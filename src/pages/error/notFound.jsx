import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>

            <Link to='/'>
                <Button>
                    Вернуться на главную страницу
                </Button>
            </Link>

        </div>
    );
};

export default NotFound;