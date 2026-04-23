import React, { lazy, Suspense } from 'react'
import Hero from '../../components/Hero/Hero'

// Lazy-load below-the-fold sections — each becomes its own async chunk
const Welcome     = lazy(() => import('../../components/Welcome/Welcome'))
const Choose      = lazy(() => import('../../components/Choose/Choose'))
const Gallery     = lazy(() => import('../../components/Gallery/Gallery'))
const MapLink     = lazy(() => import('../../components/MapLink/MapLink'))
const MarqueeSticky = lazy(() => import('../../components/Layouts/MarqueeSticky'))
const StickyCols  = lazy(() => import('../../components/StickyCols/StickyCols'))
const Project     = lazy(() => import('../../components/Project/Project'))
const Showcase    = lazy(() => import('../../components/Showcase/Showcase'))
const Contact     = lazy(() => import('../../components/Contact/Contact'))
const FooterBanner = lazy(() => import('../../components/FooterBanner/FooterBanner'))

const Home = () => {
    return (
        <div>
            {/* Hero is eagerly loaded — it's above the fold */}
            <Hero />

            {/* Everything below the fold is lazy-loaded */}
            <Suspense fallback={null}>
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
            </Suspense>
        </div>
    )
}

export default Home