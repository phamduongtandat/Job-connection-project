import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/form/ErrorMessage';
import Label from '../../components/form/Label';
import Input from '../../components/inputs/Input';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { updatePasswordSchema } from '../../validation/auth.schema';

const UpdatePassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="oldPassword">Mật khẩu cũ:</Label>
        <Input {...register('oldPassword')} id="oldPassword" />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'oldPassword')} />
      </div>
      <div>
        <Label htmlFor="newPassword">Mật khẩu mới</Label>
        <Input {...register('newPassword')} id="newPassword" />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'newPassword')} />
      </div>
      <div>
        <Label htmlFor="newPasswordConfirm">Xác nhận mật khẩu mới:</Label>
        <Input {...register('newPasswordConfirm')} id="newPasswordConfirm" />
        <ErrorMessage
          errorMessage={getErrorMessage(errors, 'newPasswordConfirm')}
        />
      </div>
      <Button className="w-full">Đổi mật khẩu</Button>
    </form>
  );
};

export default UpdatePassword;
