import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import styles from './ReservationList.module.scss';
import Table from "../../../components/Table.jsx";
import {Link} from "react-router-dom";


const ReservationList = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('home_page');
    }, [t]);

    return (
        <div>
            {t('Home')}
            <br/><br/><br/>

            <h3>Резервация</h3>
            <div className={styles.cards_rooms}>
                {[...Array(10)].map((i)=> (
                    <Card key={i} className={styles.card}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://res.cloudinary.com/practicaldev/image/fetch/s--1y5ZaRlc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m1iv6bl1w5o9i4ppoh3i.png"
                            title="react + django"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                106 Auditore
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to='/room/106'>
                                <Button size="small">Reserv</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>

        </div>
    );
};

export default ReservationList;