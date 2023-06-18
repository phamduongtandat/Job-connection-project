import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/form/ErrorMessage';
import Input from '../../components/inputs/Input';
import Select from '../../components/inputs/Select';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { registerUserSchema } from '../../validation/auth.schema';

const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerUserSchema),
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
        <Input placeholder="Mật khẩu" {...register('password')} />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'password')} />
      </div>
      <div>
        <Input
          placeholder="Xác nhận mật khẩu"
          {...register('confirmPassword')}
        />
        <ErrorMessage
          errorMessage={getErrorMessage(errors, 'confirmPassword')}
        />
      </div>
      <div>
        <Select {...register('account_type')} defaultValue="">
          <option value="" disabled>
            Loại tài khoản
          </option>
          <option value="personal">Cá nhân</option>
          <option value="business">Doanh nghiệp</option>
        </Select>
        <ErrorMessage errorMessage={getErrorMessage(errors, 'account_type')} />
      </div>
      <Button className="w-full">Đăng ký</Button>
    </form>
  );
};

export default SignUpForm;
