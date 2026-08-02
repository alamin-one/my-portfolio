'use server';
import { prisma } from '@/libs/prisma';
import { ChangePasswordFormData, UpdateProfileFormData } from '@/libs/types';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';

/*---------------------------------------------------*
 * Update Profile                                    *
 * Updates the admin profile.                        *
 *---------------------------------------------------*/

export const updateProfile = async (prevData: unknown, formData: FormData) => {
  const data: UpdateProfileFormData = {
    fullName: formData.get('fullName') as string,
    email: formData.get('email') as string,
    bio: formData.get('bio') as string,
    github: formData.get('github') as string,
    linkedin: formData.get('linkedin') as string,
    facebook: formData.get('facebook') as string,
    whatsapp: formData.get('whatsapp') as string,
    location: formData.get('location') as string,
    resume: formData.get('resume') as string,
  };

  try {
    await prisma.user.update({
      where: {
        email: data.email,
      },
      data: {
        name: data.fullName,
        email: data.email,
        bio: data.bio,
        github: data.github,
        linkedin: data.linkedin,
        facebook: data.facebook,
        whatsapp: data.whatsapp,
        location: data.location,
      },
    });

    revalidatePath('/admin/profile');

    return {
      status: true,
      message: 'Successfully updated',
    };
  } catch {
    return {
      status: false,
      message: 'Failed to update',
    };
  }
};

/*---------------------------------------------------*
 * Change Password                                   *
 * Changes the admin password.                       *
 *---------------------------------------------------*/

export const changePassword = async (
  prevData: unknown,
  formData: ChangePasswordFormData,
) => {
  const data: ChangePasswordFormData = {
    currentPassword: formData.currentPassword,
    newPassword: formData.newPassword,
    confirmPassword: formData.confirmPassword,
    email: formData.email,
  };
  try {
    if (!data.email) {
      return {
        status: false,
        message: 'Email not Found!!',
      };
    }

    if (!data.currentPassword || !data.newPassword || !data.confirmPassword) {
      return {
        status: false,
        message: 'All Field is required',
      };
    }
    if (data.newPassword !== data.confirmPassword) {
      return {
        status: false,
        message: 'New password and confirm password do not match.',
      };
    }

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      return {
        status: false,
        message: 'User not Found!!',
      };
    }
    const isMatch = await bcrypt.compare(data.currentPassword, user.password);

    if (!isMatch) {
      return {
        status: false,
        message: 'Incorrect Current password!',
      };
    }
    const newPassword = await bcrypt.hash(data.newPassword, 10);

    await prisma.user.update({
      where: {
        email: data.email,
      },
      data: {
        password: newPassword,
      },
    });

    return {
      status: true,
      message: 'Successfully updated',
    };
  } catch {
    return {
      status: false,
      message: 'Failed to update',
    };
  }
};

/*---------------------------------------------------*
 * Get Admin                                         *
 * Retrieves the admin details.                      *
 *---------------------------------------------------*/

export const getAdmin = async () => {
  try {
    const user = await prisma.user.findFirst();
    return user;
  } catch {
    return null;
  }
};
