//import { Adminskills } from '@/libs/content';

import { getAllSkills } from '@/actions/skillsAction';
import Card from '../ui/card';
import Lable from '../ui/lable';
import { Cable, CircleHelp, Database, Monitor, Server } from 'lucide-react';

const Skills = async () => {
  const Adminskills = await getAllSkills();

  return (
    <>
      <section className=" bg-linear-to-l from-background-secondary to-background  ">
        <div className="app-container">
          <div className="">
            <Lable> -- Skills</Lable>

            <h2>Tools & Technologies</h2>
            <p className="mt-2 lg:w-[60%]">
              he technologies and tools I use to build full-stack applications.
            </p>
          </div>

          {/*  */}

          <div className="mt-10 w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5">
              {Adminskills?.data?.map((item, index) => {
                const Icon =
                  item.title === 'Full-Stack & Backend'
                    ? Server
                    : item.title === 'Frontend Development'
                      ? Monitor
                      : item.title === 'Database & Validation'
                        ? Database
                        : item.title === 'Tools & Integrations'
                          ? Cable
                          : CircleHelp;

                return (
                  <Card
                    key={index}
                    className="bg-card/40! hover:bg-card-hover!"
                  >
                    <div className="w-14 h-14 bg-badge text-title-secondary flex justify-center items-center  border border-border  rounded-full">
                      <Icon size={28} />
                    </div>

                    <h4 className="mt-4 mb-2"> {item.title}</h4>
                    <div className="">
                      {item.techStack.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between items-center px-3 py-1 border-b border-dashed border-border"
                          >
                            <span>{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
