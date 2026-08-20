'use client';

import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';

import { SkillFormData } from '@/libs/types';
import handleAlert from '@/libs/handleAlert';

import InputCard from '../ui/input-card';
import Input from '../ui/input';
import Button from '../ui/button';
import SimpleListEditor from './SimpleListEditor';
import { useFormHelpersSkills } from '@/libs/useFormHelpersSkills';
import { createSkill, updateSkill } from '@/actions/skillsAction';

type InitialSkill = SkillFormData | null;

const FormAddSkill = ({ initialSkill }: { initialSkill: InitialSkill }) => {
  /*---------------------------------------------------*
   * Create & Edit Skill                             *
   * Shared logic for creating and editing skills.   *
   *---------------------------------------------------*/

  const isEdit = initialSkill !== null;

  const actionRole = isEdit ? updateSkill : createSkill;
  const [state, formAction, isPending] = useActionState(actionRole, null);

  /*---------------------------------------------------*
   * Form Helpers                                      *
   * Provides reusable helpers for managing form data. *
   *---------------------------------------------------*/

  const { form, setForm, addItem, editItem, deletItem } =
    useFormHelpersSkills(initialSkill);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillFormData>();

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
   * Handles form reset and success alert.            *
   *---------------------------------------------------*/

  useEffect(() => {
    if (!state) return;
    if (state.status) {
      if (!isEdit) {
        reset();
        setForm({
          title: '',
          slug: '',
          techStack: [],
        });
      }
    }
    handleAlert(state.status, state.message.toString());
  }, [isEdit, reset, setForm, state]);

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-7xl space-y-4"
    >
      <InputCard lable="Basic skill info" className="space-y-4">
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

        <SimpleListEditor
          className="p-0! m-0! border-none!"
          placeholder="Tech stack"
          addItem={addItem}
          editItem={editItem}
          deletItem={deletItem}
          path="techStack"
          list={form.techStack}
        />
      </InputCard>

      <Button disabled={isPending} loading={isPending} type="submit">
        {isEdit ? 'Update Project' : 'Save project'}
      </Button>
    </form>
  );
};

export default FormAddSkill;
