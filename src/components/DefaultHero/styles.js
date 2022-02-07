import { makeStyles } from "@mui/styles";
import aboutHeroImage from '../../assets/images/about-hero-mobile.jpg'
import whiteCircles from '../../assets/images/patterns/white-circles.svg'
import aboutHeroTabletImage from '../../assets/images/about-hero-tablet.jpg'
import aboutHeroDesktopImage from '../../assets/images/about-hero-desktop.jpg'

export const useStyles = makeStyles(theme => ({
    heroAbout:{
        backgroundImage: `url(${aboutHeroImage})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${whiteCircles}), url(${aboutHeroTabletImage})`,
            backgroundPosition: 'right -24px center, center !important',
            backgroundSize: '175px, cover !important'
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${whiteCircles}), url(${aboutHeroDesktopImage})`,
        }
    }
}));