import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/form/ErrorMessage';
import Input from '../../components/inputs/Input';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { resetPasswordWithTokenSchema } from '../../validation/auth.schema';

const ResetPasswordForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(resetPasswordWithTokenSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="password"
          {...register('newPassword')}
          placeholder="Mật khẩu mới"
        />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'newPassword')} />
      </div>
      <div>
        <Input
          type="password"
          {...register('confirmPassword')}
          placeholder="Xác nhận mật khẩu mới"
        />
        <ErrorMessage
          errorMessage={getErrorMessage(errors, 'confirmPassword')}
        />
      </div>
      <Button className="w-full">Đổi mật khẩu</Button>
    </form>
  );
};

export default ResetPasswordForm;
