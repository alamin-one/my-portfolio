import { Suspense } from 'react';

import ProjectsList from './ProjectsList';
import Pagination from '@/components/home/Pagination';
import { getAllProject } from '@/actions/projectActions';

const ProjectsSkeleton = () => (
  <div className="flex justify-center items-center min-h-150 py-20">
    <div className="w-8 h-8 border-4  border-border border-t-title-secondary  rounded-full animate-spin" />
  </div>
);

const ProjectPage = async () => {
  /* { searchParams, }: { searchParams: Promise<{ page: string }>;}
  const { page } = await searchParams;
  const currentPage = Number(page);
  currentPage,
  */

  const projects = await getAllProject();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 z-10 opacity-70 dark:opacity-5 bg-repeat"
          style={{ backgroundImage: "url('/pattern.afd33a3d.svg')" }}
        />
        <div className="app-container pt-25 md:pt-25 pb-10 flex flex-col justify-center relative z-50">
          {/* tooltip */}
          <div className="flex justify-start items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full relative">
              <div className="w-3 h-3 rounded-full border-3 border-[#17302B] animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-title-secondary uppercase ">All Projects</p>
          </div>
          <h1 className="mt-5 mb-3 bg-linear-to-r from-text to-title-secondary bg-clip-text text-transparent">
            My Development Work
          </h1>
          <p className=" md:text-[18px] w-full  md:w-[70%]">
            Explore the projects I&apos;ve built, showcasing modern
            technologies, clean architecture, and practical solutions to
            real-world problems.
          </p>
        </div>
      </section>

      <section className=" bg-background ">
        <div className="app-container py-10 pb-5">
          <Suspense fallback={<ProjectsSkeleton />}>
            {projects.status ? (
              <ProjectsList projects={projects.data!} />
            ) : (
              projects.message
            )}
          </Suspense>
        </div>
      </section>
      <Pagination page={1} />
    </>
  );
};

export default ProjectPage;
