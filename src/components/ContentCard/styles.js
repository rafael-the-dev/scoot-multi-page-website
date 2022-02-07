import { makeStyles } from "@mui/styles";
import locateIcon from '../../assets/images/icons/locate.svg'
import pickingIcon from '../../assets/images/icons/scooter.svg'
import enjoyingIcon from '../../assets/images/icons/ride.svg'

export const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '7%',
            paddingRight: '7%',
            '&:last-child': {
                position: 'relative'
            },
            '&:last-child p': {
                '&::before': {
                    background: '#FFF',
                    content: '""',
                    height: '100%',
                    left: '9%',
                    position: 'absolute',
                    top: 0,
                    width: 30,
                    zIndex: 0
                }
            }
            /*'&::before': {
                backgroundColor: '#E5ECF4',
                height: '100%',
                left: 0,
                width: 6
            }*/
        },
        [theme.breakpoints.up('md')]: {
            marginRight: '3%',
            width: '31.3333%',
            '&:last-child ': {
                marginRight: 0,
            },
            '&:last-child p': {
                '&::before': {
                    position: 'relative',
                }
            }
        }
    },
    title: {
        '&::before': {
            height: 60,
            width: 60,
            zIndex: 1,
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '20%',
            paddingRight: '20%',
            '&::before': {
                left: 0,
                top: 0
            }
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
    },
    description: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '20%',
            paddingRight: '5%',
        }
    },
}));