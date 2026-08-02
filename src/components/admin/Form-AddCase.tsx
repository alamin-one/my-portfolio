'use client';

import { startTransition, useActionState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { X } from 'lucide-react';

import { createProject, updateProject } from '@/actions/projectActions';
import { ProjectFormData } from '@/libs/types';
import handleAlert from '@/libs/handleAlert';
import genareteImgURL from '@/libs/genareteImgURL';
import { useFormHelpers } from '@/libs/useFormHelpers';

import InputCard from '../ui/input-card';
import Input from '../ui/input';
import Textarea from '../ui/textrea';
import Button from '../ui/button';
import SimpleListEditor from './SimpleListEditor';
import TitledListEditor from './TitledListEditor';

type InitialProject = ProjectFormData | null;

const FormAddCase = ({
  initialProject,
}: {
  initialProject: InitialProject;
}) => {
  /*---------------------------------------------------*
   * Create & Edit Project                             *
   * Shared logic for creating and editing projects.   *
   *---------------------------------------------------*/

  const isEdit = initialProject !== null;

  const actionRole = isEdit ? updateProject : createProject;
  const [state, formAction, isPending] = useActionState(actionRole, null);

  /*---------------------------------------------------*
   * Form Helpers                                      *
   * Provides reusable helpers for managing form data. *
   *---------------------------------------------------*/
  const { form, setForm, addItem, editItem, deletItem, removeImage } =
    useFormHelpers(initialProject);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormData>();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await genareteImgURL(file);

    addItem('image.url', url.url);
    addItem('image.public_id', url.public_id);
  };

  const onSubmit = () => {
    const data = {
      ...form,
      slug:
        form.slug ||
        slugify(form.title, {
          lower: true,
          strict: true,
        }),
    };

    startTransition(() => {
      formAction(data);
    });
  };

  /*---------------------------------------------------*
   * Form Submission Effect                            *
   * Handles form reset and success Aleart.            *
   *---------------------------------------------------*/
  useEffect(() => {
    // ...
  }, [isEdit, reset, setForm, state]);

  useEffect(() => {
    if (!state) return;
    if (state.status) {
      if (!isEdit) {
        reset();
        setForm({
          title: '',
          slug: '',
          image: {
            url: '',
            public_id: '',
          },
          description: '',
          techStack: [],
          whyTheseTechnologies: [],
          problems: [],
          solutions: [],
          responsibilities: {
            frontend: [],
            backend: [],
          },
          links: { liveDemo: '', github: '' },
        });
      }
    }
    handleAlert(state.status, state.message);
  }, [isEdit, reset, setForm, state]);

  const url = form.image.url;
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-7xl space-y-4"
    >
      <InputCard lable="Basic info" className="space-y-4">
        <Input
          value={form.title}
          {...register('title', {
            required: 'Title is required',
          })}
          error={errors.title}
          onChange={e => addItem('title', e.target.value)}
          label="Title"
          placeholder="Title"
        />

        <Textarea
          value={form.description}
          {...register('description', {
            required: 'Description is required',
          })}
          onChange={e => addItem('description', e.target.value)}
          label="Description"
          placeholder="Description"
          error={errors.description}
        />
      </InputCard>

      <SimpleListEditor
        lable="Tech stack"
        placeholder="Tech stack"
        addItem={addItem}
        editItem={editItem}
        deletItem={deletItem}
        path="techStack"
        list={form.techStack}
      />
      <TitledListEditor
        lable="Why these technologies"
        TitlePlaceholder="title"
        DesPlaceholder="Description"
        addItem={addItem}
        editItem={editItem}
        deletItem={deletItem}
        path="whyTheseTechnologies"
        list={form.whyTheseTechnologies}
      />
      <TitledListEditor
        lable="Problems"
        TitlePlaceholder="title"
        DesPlaceholder="Description"
        addItem={addItem}
        editItem={editItem}
        deletItem={deletItem}
        path="problems"
        list={form.problems}
      />
      <TitledListEditor
        lable="Solutions"
        TitlePlaceholder="title"
        DesPlaceholder="Description"
        addItem={addItem}
        editItem={editItem}
        deletItem={deletItem}
        path="solutions"
        list={form.solutions}
      />

      <SimpleListEditor
        lable="Frontend"
        placeholder="Tech stack"
        addItem={addItem}
        editItem={editItem}
        deletItem={deletItem}
        path="responsibilities.frontend"
        list={form.responsibilities.frontend}
      />

      <SimpleListEditor
        lable="Backend"
        placeholder="Tech stack"
        addItem={addItem}
        editItem={editItem}
        deletItem={deletItem}
        path="responsibilities.backend"
        list={form.responsibilities.backend}
      />

      <InputCard lable="image" className="w-fit! p-0!">
        {url ? (
          <div className="relative">
            <Image
              alt="post image"
              src={url}
              width={100}
              height={80}
              className="rounded-xl object-cover w-50 h-30 "
            />
            <button
              type="button"
              onClick={() => {
                removeImage();
              }}
              className="absolute top-2 right-2 text-danger bg-danger/50 rounded-full cursor-pointer"
            >
              <X />
            </button>
          </div>
        ) : (
          <label
            className="w-20 h-20 border-dashed border border-border rounded-xl flex justify-center items-center text-2xl"
            htmlFor="image"
          >
            +
          </label>
        )}

        <input
          type="file"
          name=""
          id="image"
          className="hidden"
          onChange={e => handleUpload(e)}
        />
      </InputCard>

      <InputCard lable="Links" className="flex justify-center items-center">
        <div className="space-y-3 flex-1">
          <Input
            value={form?.links?.liveDemo}
            onChange={e => addItem('links.liveDemo', e.target.value)}
            label="Live demo URL"
            placeholder="https://.."
          />
          <Input
            value={form?.links?.github}
            onChange={e => addItem('links.github', e.target.value)}
            label="GitHub URL"
            placeholder="https://github.com/..."
          />
        </div>
      </InputCard>
      <Button disabled={isPending} loading={isPending} type="submit">
        {isEdit ? 'Update Project' : 'Save project'}
      </Button>
    </form>
  );
};

export default FormAddCase;
