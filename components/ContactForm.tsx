import { ReactElement } from 'react';
import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { contactSchema } from 'utils/validators/contact';
import { post } from 'utils/http';
import InputText from 'components/InputText';
import InputTextArea from 'components/InputTextArea';
import LoadingSpinner from 'components/LoadingSpinner';

interface ContactFormProps {
  className?: string;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = ({ className = '' }: ContactFormProps): ReactElement => {
  const { clearErrors, handleSubmit, formState, register, reset } =
    useForm<FormValues>({
      resolver: yupResolver(contactSchema),
    });

  const handleRequest = async (data: FormValues) => {
    const res = await post('https://formspree.io/f/xjvlvekw', data);

    return res;
  };

  const {
    isLoading,
    isSuccess,
    isError,
    error: apiError,
    mutate: postForm,
  } = useMutation(handleRequest, {});

  const submitForm: SubmitHandler<FormValues> = async (data, e) => {
    e!.preventDefault();
    postForm(data);

    if (isError) return;

    clearErrors();
    reset();
  };

  return (
    <form
      name="contact"
      className={classNames('contact-form', { [`${className}`]: className })}
      onSubmit={handleSubmit(submitForm)}
    >
      <InputText
        id="contact-name"
        label="Name"
        placeholder="Name"
        register={register}
        error={formState?.errors?.name?.message || ''}
      />
      <InputText
        id="contact-email"
        label="Email"
        placeholder="Email"
        register={register}
        className="mt-6"
        error={formState?.errors?.email?.message || ''}
      />
      <InputTextArea
        id="contact-message"
        label="Message"
        placeholder="Message"
        register={register}
        className="mt-6"
        error={formState?.errors?.message?.message || ''}
      />
      {isSuccess && (
        <p data-testid="success" className="contact-form__success mt-8">
          {"Thanks for your message! I'll be in touch soon."}
        </p>
      )}
      {isError && (
        <p data-testid="api-error" className="contact-form__api-error mt-8">
          {(apiError as string) ||
            'There was an error processing your request.'}
        </p>
      )}
      <button type="submit" className="c-btn mt-8">
        {isLoading ? <LoadingSpinner /> : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
