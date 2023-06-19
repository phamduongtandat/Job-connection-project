import Field from './Field';

const Fields = () => {
  return (
    <div className="px-4 xl:px-0 overflow-hidden">
      <div className="flex gap-x-5 overflow-auto py-4 small-scrollbar">
        <Field>Lập trình website</Field>
        <Field>Marketing</Field>
        <Field>Thiết kế phần mềm</Field>
        <Field>Chỉnh sửa video</Field>
        <Field>Viết bài chuẩn seo</Field>
        <Field>Thiết kế logo</Field>
        <Field>Wordpress</Field>
        <Field>Shopify</Field>
        <Field>Chạy quảng cáo</Field>
        <Field>Quản lý mạng xã hội</Field>
      </div>
    </div>
  );
};

export default Fields;
