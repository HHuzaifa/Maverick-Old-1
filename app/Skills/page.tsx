import Wrapper from "@/app/components/Wrapper";
import Skill from "@/app/components/SkillC";

export default function Skills() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Wrapper>
        <div className="w-full">
          <div className="flex flex-col text-justify">
            <h1 className="text-2xl xl:text-3xl font-HeadingFont text-[#0087ff] font-bold">
              Technologies I Work On
            </h1>
            <p className="text-lg font-semibold xl:my-16 font-ParagraphFont my-11 text-[#f9f9f9]">
              Everything is achievable through technology. With each new skill I
              acquire, I&apos;m excited to see how it can be used to help others and
              create meaningful change.
            </p>
          </div>
          <div className="grid z-50 grid-cols-4 border-x-2 border-y-2 border-[#0087ff] gap-8 xl:grid-cols-10 xl:gap-10 bg-black p-10 rounded-xl">
            <Skill image="/Skills Icons/js.png" />
            <Skill image="/Skills Icons/react.png" />
            <Skill image="/Skills Icons/nextJs.png" />
            <Skill image="/Skills Icons/nodeJs.png" />
            <Skill image="/Skills Icons/typescript.png" />
            <Skill image="/Skills Icons/graphQL.png" />
            <Skill image="/Skills Icons/python.png" />
            <Skill image="/Skills Icons/tensorflow.png" />
            <Skill image="/Skills Icons/git.png" />
            <Skill image="/Skills Icons/github.png" />
            <Skill image="/Skills Icons/vercel.png" />
            <Skill image="/Skills Icons/aws.png" />
            <Skill image="/Skills Icons/numpy.png" />
            <Skill image="/Skills Icons/pandas.png" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
