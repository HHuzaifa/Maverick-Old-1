import Wrapper from "@/components/Wrapper";
import PortfolioCard from "@/components/PortfolioC";

export default function Portfolio() {
  return (
    <section id="PortfolioSection" className="w-full h-full flex flex-col justify-center mb-20 mt-10">
      <Wrapper>
        <div className="w-full">
          <h1 className="text-2xl mb-10 xl:text-3xl font-HeadingFont text-[#0087ff] font-bold">
            My Recent Work
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 bg-black p-10 rounded-xl">
            <PortfolioCard
              image="/Portfolio Images/panaverseTailwind.png"
              bText="View Live"
              pLink="https://panaverse-dao-next-js-tailwind-css.vercel.app/"
            />
            <PortfolioCard
              image="/Portfolio Images/pricingCard.png"
              bText="View Live"
              pLink="https://pricing-ui-next-js-chakra-ui.vercel.app/"
            />
            <PortfolioCard
              image="/Portfolio Images/piaicChakraUI.png"
              bText="View Live"
              pLink="https://piaic-website-next-js-chakra-ui.vercel.app/"
            />
            <PortfolioCard
              image="/Portfolio Images/panaverseChakraUI.png"
              bText="View Live"
              pLink="https://panaverse-website-six.vercel.app/"
            />
          </div>

        </div>
      </Wrapper>
    </section>
  );
}
