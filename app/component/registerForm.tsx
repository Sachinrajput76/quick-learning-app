"use client";
// app/component/register.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/redux/actions/registerActions'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['Student', 'Teacher'], { required_error: 'Role is required' }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters long'),
  phoneNumber: z.string().min(10, 'Phone number must be 10 digits').max(10, 'Phone number must be 10 digits'),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid Date of Birth',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormValues = z.infer<typeof schema>;

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    const userData = { ...data, username: data.name }; // Example of setting username as the name
    dispatch(registerUser(userData));
  };
  
  return (
    <div className="container mx-auto">
      <form
        className="max-w-7xl mx-auto bg-white shadow-md rounded-lg px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="col-span-full text-3xl font-bold text-center mb-6">Register</h2>

        {/* Name */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Role */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Role</label>
          <select
            {...register('role')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
        </div>

        {/* Password */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
          <input
            type="text"
            {...register('phoneNumber')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Date of Birth</label>
          <input
            type="date"
            {...register('dateOfBirth')}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="col-span-full text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400 transition-all duration-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
