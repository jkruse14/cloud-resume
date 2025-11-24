import { Headshot } from "../headshot/Headshot"
import headshot from '../../assets/headshot.png'
import tcm2025 from '../../assets/tcm-2025-2.jpg'
import './about-me.css'

export function AboutMe() {
    return (
        <section className="about-me-wrapper">
            <div>
                <Headshot
                    src={headshot}
                    alt="Hello World!"
                    bgBoxLeft="60%"
                    gradientStart="#3066b1"
                    gradientEnd="#89c4fb"
                />
                <p className="mission-statement mission-statement-professional">Help companies build and secure the future of cloud applications</p>
            </div>
            <div className="about-me-content">
                <h1>Justin Kruse</h1>
                <p className="about-me-tagline">Father | Fitness Enthusiast | Cloud Technologist</p>
                <div className="mission-container">
                    <span className="about-me-mission-chevron">&#10096;</span>
                    <h2 className="mission-heading">Mission</h2>
                    <span className="about-me-mission-chevron">&#10097;</span>
                </div>
            </div>
            <div>
                <Headshot
                    src={tcm2025}
                    alt="Running Dad"
                    bgBoxLeft="40%"
                    gradientStart="#89c4fb"
                    gradientEnd="#3066b1"
                />
                <p className="mission-statement mission-statement-personal">Help people live healthy, active lifestyles</p>
            </div>
        </section>
    )
}