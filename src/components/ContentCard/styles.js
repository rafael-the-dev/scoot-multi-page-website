import { makeStyles } from "@mui/styles";
import locateIcon from '../../assets/images/icons/locate.svg'
import pickingIcon from '../../assets/images/icons/scooter.svg'
import enjoyingIcon from '../../assets/images/icons/ride.svg'

export const useStyles = makeStyles(theme => ({
    title: {
        '&::before': {
            height: 60,
            width: 60
        }
    },
    locating: {
        '&::before': {
            backgroundImage: `url(${locateIcon})`
        }
    },
    picking: {
        '&::before': {
            backgroundImage: `url(${pickingIcon})`
        }
    },
    enjoying: {
        '&::before': {
            backgroundImage: `url(${enjoyingIcon})`
        }
    }
}));