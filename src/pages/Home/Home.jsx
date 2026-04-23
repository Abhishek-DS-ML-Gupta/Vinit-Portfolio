import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Choose from '../../components/Choose/Choose'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import MarqueeText from '../../components/Marquee/MarqueeText'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import MapLink from '../../components/MapLink/MapLink'
import Project from '../../components/Project/Project'
import Showcase from '../../components/Showcase/Showcase'
import Contact from '../../components/Contact/Contact'
import FooterBanner from '../../components/FooterBanner/FooterBanner'

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Choose />
            <Gallery />
            <MapLink />
            <MarqueeSticky />
            <StickyCols />
            <Project />
            <Showcase />
            <Contact />
            <FooterBanner />
        </div >
    )
}

export default Home