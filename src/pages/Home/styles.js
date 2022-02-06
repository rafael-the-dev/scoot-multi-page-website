import { makeStyles } from "@mui/styles";
import hero from '../../assets/images/home-hero-mobile.jpg'
import rightArrow from '../../assets/images/patterns/right-arrow.svg'
import heroTablet from '../../assets/images/home-hero-tablet.jpg'
import whiteCircles from '../../assets/images/patterns/white-circles.svg'

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))';

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `${linearGradient}, url(${rightArrow}), url(${hero})`,
        backgroundPosition: 'center, left -297px bottom 32px, center',
        backgroundSize: 'cover, 400px, cover',
        height: 504,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${rightArrow}), url(${whiteCircles}), url(${heroTablet})`,
            backgroundPosition: 'center, left -118px bottom 18px, right -24px bottom 39px, center',
            backgroundSize: 'cover, 354px, 175px, cover',
            height: 550,
        }
    }
}));