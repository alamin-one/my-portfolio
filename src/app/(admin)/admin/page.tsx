import { getAllProject, getRelativeTime } from '@/actions/projectActions';
import AdminProjectCard from '@/components/admin/AdminProjectCard';
import SectionBar from '@/components/layout/Section-Bar';
import Lable from '@/components/ui/lable';

const AdminPage = async () => {
  const project = await getAllProject();
  const latestProject = await getRelativeTime();
  const total_case = project.data?.length;

  const DashboardMenu = [
    { title: 'Total case', value: String(total_case) },
    { title: 'Published', value: String(total_case) },
    { title: 'Latest Project', value: String(latestProject) },
    { title: 'Total Views', value: 15 },
  ];

  return (
    <section className="px-5 pb-4 pt-20 md:pt-4">
      <SectionBar
        title="Overview"
        description="A quick snapshot of my case studies."
      />
      {/* over view */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {DashboardMenu.map((item, index) => (
          <div
            key={index}
            className="bg-title-secondary/5  px-5 py-4 rounded-xl"
          >
            <p>{item?.title}</p>

            {index === 2 ? (
              <h3 className="text-title-secondary">{item?.value}</h3>
            ) : (
              <h2 className="text-title-secondary"> {item?.value}</h2>
            )}
          </div>
        ))}
      </div>
      {/* Recent case studies */}
      <div className="mt-8">
        <Lable>Recent case studies</Lable>
        <div className="mt-3 border-b border-b-border">
          {project?.status ? (
            <AdminProjectCard data={project?.data ?? []} />
          ) : (
            <p> {project?.message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
