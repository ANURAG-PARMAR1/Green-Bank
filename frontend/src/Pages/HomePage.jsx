import {Footer} from "../Component/Footer/Footer"
import React, { useState } from "react";
import {HeroSection} from "../Component/HeroSection/HeroSection"
import { SecondaryHeroSection } from "../Component/HeroSection/SecondaryHeroSection"
import { Navbar } from "../Component/Navbar/Navbar"

export function HomePage() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <SecondaryHeroSection/>
            <Footer/>
        </div>
    )
}
