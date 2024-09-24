import { ScrollParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";
import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-2">
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                <img src={smallSphere} 
                className="relative z-2"
                width={255}
                height={255}
                alt="Sphere" />
                <ScrollParallax isAbsolutelyPositioned>
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2
                    -translate-y-1/2 pointer-events-none">
                        <img src={stars}
                        className="w-full"
                        width={950}
                        height={400}
                        alt="Stars" />
                    </div>
                </ScrollParallax>
                <div className="absolute bottom-1/2 right-1/2 w-[40rem] translate-x-1/2
                    translate-y-1/2 pointer-events-none">
                        <img src={stars}
                        className="w-full"
                        width={950}
                        height={400}
                        alt="Stars" />
                    </div>
            </div>
            <Heading 
                tag="Get started with MegaMind"
                title="Pay once, use forever"
            />
            <div className="relative">
                <PricingList />
                <LeftLine />
                <RightLine />
            </div>
            <div className="flex justify-center mt-10">
                <a href="/pricing"
                    className="text-xs font-code font-bold tracking-wider uppercase 
                    hover:border-b border-n-6
                    hover:text-color-1 transition-colors"
                >See the full details</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing