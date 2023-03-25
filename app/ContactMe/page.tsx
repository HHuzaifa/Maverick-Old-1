import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

export default function ContactMe() {
  return (
    <section id="ContactSection" className="w-full h-screen flex flex-col justify-center mb-20">
      <Wrapper>
        <div className="w-full">
          <h1 className="text-2xl xl:text-3xl font-HeadingFont text-[#0087ff] my-11 font-bold">
            Contact Me
          </h1>

          <div className="z-50 flex justify-center md:justify-center xl:justify-center md:pl-5 bg-black rounded-xl py-10">
            <form className="xl:ml-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-slate-900 text-gray-200 placeholder:text-gray-200 text-start rounded-xl font-ParagraphFont font-semibold pl-2 pr-20 py-2 md:pl-5 md:pr-44 md:py-3 xl:pr-72"
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-slate-900 text-gray-200 placeholder:text-gray-200 rounded-xl text-start font-ParagraphFont font-semibold pl-2 pr-20 py-2 md:pl-5 md:pr-44 md:py-3 xl:pr-72"
                />
              </div>
              <div>
                <textarea
                  rows={8}
                  placeholder="Message"
                  className="bg-slate-900 text-gray-200 placeholder:text-gray-200 rounded-xl text-start font-semibold font-ParagraphFont pl-2 py-2 w-72 md:md:pl-5 md:w-96 md:py-3 xl:min-w-full"
                ></textarea>
              </div>
              <div className="flex justify-start xl:justify-center mt-4">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
