import { makeStyles } from "@mui/styles";
import semiCircles from '../../assets/images/patterns/semi-circles.svg'

export const useStyles = makeStyles(theme => ({
    signInBanner: {
        backgroundImage: `url(${semiCircles})`,
        backgroundPosition: 'left -605px bottom',
        [theme.breakpoints.up('sm')]: {
            backgroundPosition: 'right bottom',
        },
        [theme.breakpoints.up('md')]: {
            backgroundPosition: 'right -200px bottom',
        }
    },
    imageContainer: {
        height: 40,
        width: 120
    }
}));