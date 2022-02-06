import { makeStyles } from "@mui/styles";
import hero from '../../assets/images/home-hero-mobile.jpg'

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1)), url(${hero})`,
        height: 400
    }
}));