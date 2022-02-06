import { makeStyles } from "@mui/styles";
import hero from '../../assets/images/home-hero-mobile.jpg'
import rightArrow from '../../assets/images/patterns/right-arrow.svg'

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1)), url(${rightArrow}), url(${hero})`,
        backgroundPosition: 'center, left -297px bottom 32px, center',
        backgroundSize: 'cover, 400px, cover',
        height: 504
    }
}));