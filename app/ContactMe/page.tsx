import Button from "@/app/components/Button";
import Wrapper from "@/app/components/Wrapper";

export default function ContactMe() {
  return (
    <section className="w-full h-screen flex flex-col justify-center mb-10">
      <Wrapper>
        <div className="w-full">
          <h1 className="text-2xl xl:text-3xl font-HeadingFont text-[#0087ff] my-11 font-bold">
            Contact Me
          </h1>

          <div className="z-50 flex justify-center xl:justify-start border-x-2 border-y-2 border-[#0087ff] bg-black rounded-xl py-10">
            <form className="xl:ml-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name Here"
                  className="rounded-xl px-5 bg-[#f9f9f9] text-start font-ParagraphFont font-semibold text-lg py-2 xl:pr-40"
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Your Email Here"
                  className="rounded-xl px-5 text-lg bg-[#f9f9f9] font-ParagraphFont font-semibold py-2 xl:pr-40"
                />
              </div>
              <div>
                <textarea
                  rows={10}
                  placeholder="Your Message"
                  className="inline-block bg-[#f9f9f9] rounded-xl text-lg font-semibold font-ParagraphFont ring-1 outline-none px-9 xl:pr-96"
                ></textarea>
              </div>
              <div className="flex justify-center xl:justify-start mt-4">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
