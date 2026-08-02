import Link from 'next/link';
import { getContactInformation } from '@/libs/content';

import FormContact from './FormContact';
import Lable from '../ui/lable';

const style = {
  parent:
    'group pb-2  text-sm text-title hover:text-title-secondary flex justify-between items-center border-b border-dashed border-border',
  iconBox: 'flex items-center gap-2',
  icon: 'w-4 group-hover:text-title-secondary',
};

const Contact = async () => {
  const contactInformation = await getContactInformation();
  return (
    <section className=" bg-background ">
      <div className="app-container">
        <div className="">
          <Lable> -- Get In Touch</Lable>
          <h2>Let&apos;s Build Something Together</h2>
          <p className="mt-2 lg:w-[60%]">
            Whether you have a project in mind, a collaboration opportunity, or
            just want to say hello, I&apos;d be happy to hear from you.
            Let&apos;s connect and create something meaningful.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-start gap-5 md:gap-15">
          <div className="w-full md:w-3/4 ">
            <FormContact />
          </div>
          <div className="w-full md:w-1/2  mt-4 flex flex-col  gap-5">
            {contactInformation.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link key={index} href={item.link ?? ''}>
                  <div className={style.parent}>
                    <div className={style.iconBox}>
                      <Icon className={style.icon} />
                      <span> {item.title}</span>
                    </div>
                    {item.label ? (
                      <span className="text-text text-sm group-hover:text-title-secondary">
                        {item.label}
                      </span>
                    ) : (
                      <span>↗ </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
