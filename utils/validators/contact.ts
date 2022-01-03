import { object, string } from 'yup';

export const name = string()
  .label('Name')
  .max(80, 'Name must be ${max} characters or less.')
  .required('Name is required.')
  .min(2, 'Name must be at least ${min} characters.');

export const email = string()
  .label('Email')
  .email('Please enter a valid email address.')
  .required('Email is required.');

export const message = string()
  .label('Message')
  .required('Message is required.');

export const contactSchema = object({
  name,
  email,
  message,
}).required();
