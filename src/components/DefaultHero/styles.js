import { makeStyles } from "@mui/styles";
import aboutHeroImage from '../../assets/images/about-hero-mobile.jpg'

export const useStyles = makeStyles(theme => ({
    heroAbout:{
        backgroundImage: `url(${aboutHeroImage})`
    }
}));