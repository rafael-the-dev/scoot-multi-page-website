import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';

const App = () => {
    const theme = createTheme();

    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));
    const Header = loadable(() => import(/* webpackChunkName: "Header" */ '../../components/Header'));
    const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ '../../components/Footer'));
    const SignInBanner = loadable(() => import(/* webpackChunkName: "SignInBanner" */ '../../components/SignInBanner'));
    const CareersPage = loadable(() => import(/* webpackChunkName: "CareersPage" */ '../Careers'));
    const AboutUsPage = loadable(() => import(/* webpackChunkName: "AboutUsPage" */ '../About'));
    const LocationsPage = loadable(() => import(/* webpackChunkName: "LocationsPage" */ '../Locations'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Header />
                            <Routes>
                                <Route exact path="/about-us" element={<AboutUsPage />} />
                                <Route exact path="/locations" element={<LocationsPage />} />
                                <Route exact path="/careers" element={<CareersPage />} />
                                <Route path="/" element={<HomePage />} />
                            </Routes>
                            <SignInBanner />
                            <Footer />
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;