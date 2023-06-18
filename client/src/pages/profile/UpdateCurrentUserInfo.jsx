import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/form/ErrorMessage';
import Label from '../../components/form/Label';
import Input from '../../components/inputs/Input';
import ListBox from '../../components/inputs/ListBox';
import Textarea from '../../components/inputs/Textarea';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { updateCurrentUserSchema } from '../../validation/auth.schema';

const UpdateCurrentUserInfo = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateCurrentUserSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-2">
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input
          value="admin@admin.com"
          disabled
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <Label htmlFor="name">Họ và tên:</Label>
        <Input {...register('name')} id="name" placeholder="Họ và tên" />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'name')} />
      </div>
      <div>
        <Label htmlFor="fields">Lĩnh vực kinh doanh:</Label>
        <ListBox
          fieldName="fields"
          control={control}
          multiple
          options={[
            {
              displayText: 'Thiết kế website',
              value: 'thisis24characters111111',
            },
            {
              displayText: 'Lập trình website',
              value: 'thisis24charactess111111',
            },
          ]}
          placeholder="Click để lựa chọn lĩnh vực kinh doanh"
          hasError={!!getErrorMessage(errors, 'fields')}
        />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'fields')} />
      </div>
      <div>
        <Label htmlFor="overview">
          Mô tả thông tin cá nhân hoặc doanh nghiệp:
        </Label>
        <Textarea
          {...register('overview')}
          id="overview"
          placeholder="Giới thiệu tóm tắt về  bản thân hoặc thông tin của doanh nghiệp"
        />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'overview')} />
      </div>
      <div>
        <Label htmlFor="address">Địa chỉ:</Label>
        <Input {...register('address')} id="address" placeholder="Địa chỉ" />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'address')} />
      </div>
      <div>
        <Label htmlFor="phone">Số điện thoại:</Label>
        <Input id="phone" {...register('phone')} placeholder="Số điện thoại" />
        <ErrorMessage errorMessage={getErrorMessage(errors, 'phone')} />
      </div>
      <Button type="submit" className="w-full">
        Cập nhật
      </Button>
    </form>
  );
};

export default UpdateCurrentUserInfo;
