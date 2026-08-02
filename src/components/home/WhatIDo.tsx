import { WhatIDoContent } from '@/libs/content';

import Card from '../ui/card';
import Lable from '../ui/lable';

const WhatIDo = () => {
  return (
    <section className=" bg-background ">
      <div className="app-container">
        <div className="">
          <Lable> -- What I Do</Lable>
          <h2>What I Bring to the Table</h2>
          <p className="mt-2 lg:w-[60%]">
            I build full-stack web applications from scratch — from planning the
            structure to writing the frontend, backend, and connecting
            everything to a database.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WhatIDoContent.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={index}>
                <div className="w-14 h-14 bg-badge text-title-secondary flex justify-center items-center  border border-border  rounded-full">
                  <Icon size={28} />
                </div>

                <h4 className="mt-4 mb-2"> {item.title}</h4>
                <p className="text-[15px]">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
