import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/form/ErrorMessage';
import Input from '../../components/inputs/Input';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { signInSchema } from '../../validation/auth.schema';

const SignInForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <Input placeholder="Email" {...register('email')} />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'email')} />
      </div>
      <div>
        <Input
          placeholder="Mật khẩu"
          {...register('password')}
          type="password"
        />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'password')} />
      </div>
      <Button className="font-semibold w-full">Đăng nhập</Button>
    </form>
  );
};

export default SignInForm;
