'use client';

import Link from 'next/link';

import Button from '../ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { deleteProject } from '@/actions/projectActions';
import handleAlert from '@/libs/handleAlert';

interface Props {
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
    public_id: string;
  };
}

const AdminProjectCard = ({ data }: { data: Props[] }) => {
  return data.map((item, index) => (
    <div
      key={index}
      className="hover:bg-card flex justify-between gap-5 border-t border-t-border py-3"
    >
      <p className="line-clamp-1 text-title">{item.title}</p>
      <div className="flex gap-2">
        <Link href={`/projects/${item.slug}`}>
          <Button variant="secondary" size="sm">
            <Eye size={14} className="text-success" /> view
          </Button>
        </Link>
        <Link href={`/admin/edit/${item.slug}`}>
          <Button variant="secondary" size="sm">
            <Pencil size={10} className="text-title-secondary" /> Edit
          </Button>
        </Link>

        <Button
          onClick={async () => {
            const res = await deleteProject(item.slug, item.image.public_id);
            handleAlert(res.status, res.message);
          }}
          variant="secondary"
          size="sm"
        >
          <Trash2 size={12} className="text-danger" /> Edit
        </Button>
      </div>
    </div>
  ));
};

export default AdminProjectCard;
