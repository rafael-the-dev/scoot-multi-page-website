import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import DefaultHero from '../../components/DefaultHero';
import DefaultCard from '../../components/DefaultCard';
import digitalEraImage from '../../assets/images/digital-era.jpg'
import betterLivingImage from '../../assets/images/better-living.jpg'
import JoinUsSection from '../../components/JoinUsSection';
import { useCallback, useEffect, useMemo, useState } from 'react'
import ListItem from './ListItem'

const AboutPage = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ open, setOpen ] = useState({ });

    const faqs = useMemo(() => [
        {
            title: 'How it works',
            list: [
                {
                    id: 'faq1',
                    question: 'How do I download the app?',
                    answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
                },
                {
                    id: 'faq2',
                    question: 'Can I find a nearby Scoots?',
                    answer: ''
                },
                {
                    id: 'faq3',
                    question: 'Do I need a license to ride?',
                    answer: ''
                }
            ]
        }, 
        {
            title: 'Safe driving',
            list: [
                {
                    id: 'faq4',
                    question: 'Should I wear a helmet?',
                    answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
                },
                {
                    id: 'faq5',
                    question: 'How about the rules & regulations?',
                    answer: ''
                },
                {
                    id: 'faq6',
                    question: 'What if I damage my Scoot?',
                    answer: ''
                }
            ]
        }
    ], []);

    const defaultHero = useMemo(() => <DefaultHero page="about" title='About' />, []);
    const cardsSection = useMemo(() => (
        <div className={classNames('pt-24 md:pt-20')}>
            <DefaultCard 
                description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
                image={digitalEraImage}
                index={0}
                title="Mobility for the digital era"
            />
            <DefaultCard 
                description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
                image={betterLivingImage}
                index={1}
                title="Better urban living"
            />
        </div>
    ), [])
    const joinUsSection = useMemo(() => <JoinUsSection />, []);

    const listItemClickHandler = useCallback(id => () => {
        setOpen(o => ({ ...o, [id]: !o[id]}))
    }, []);


    const fqasSection = useMemo(() => (
        <>
            {
                faqs.map((item, index) => (
                    <div key={index} className={classNames('mt-8 md:flex md:items-start')}>
                        <Typography 
                            className={classNames(globalStyles.darkNavyColor, classes.faqTitle ,
                            'text-center md:text-left font-bold mb-2 md:mb-0')}
                            component="h3"
                            variant="h5" 
                            >
                            { item.title }
                        </Typography>
                        <List className={classNames(classes.faqList, 'md:grow md:ml md:py-0')}>
                            { item.list.map((subItem, index) => (
                                <ListItem key={index} { ...subItem } />
                            ))}
                        </List>
                    </div>
                ))
            }
        </>
    ), [ classes, faqs, globalStyles ]);

    useEffect(() => {
        let states = {};

        faqs.forEach(item => {
            item.list.forEach(subItem => {
                states = { ...states, [subItem.id]: false }
            })
        });
        setOpen(states)
    }, [ faqs ])

    return (
        <main>
            { defaultHero }
            { cardsSection }
            { joinUsSection }
            <section className={classNames(globalStyles.px, 'mb-12 -mt-4')}>
                <Typography 
                    className={classNames(globalStyles.darkNavyColor, 'text-center font-bold')}
                    component="h2"
                    variant="h4" 
                    >
                    FAQs
                </Typography>
                { fqasSection }
            </section>
        </main>
    );
};

export default AboutPage;