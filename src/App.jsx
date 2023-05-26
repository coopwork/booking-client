import './App.scss'
import Header from "./components/Header/Header.jsx";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import {useEffect} from "react";
import {languages} from "./utils/consts.js";
import AppRouter from "./components/AppRouter.jsx";
import {Container} from "@mui/material";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const { t } = useTranslation();

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t]);

  return (
    <>
        <Header/>
        <Container maxWidth="xl" className="contentContainer">
            <AppRouter/>
        </Container>
        <Footer/>
    </>
  )
}

export default App
