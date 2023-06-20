import { useSearchParams } from 'react-router-dom';
import Avatar from '../../../components/avatar/Avatar';
import Button from '../../../components/button/Button';
import KeywordHighlighter from '../../../components/keywordHighlighter/KeywordHighlighter';
import EditButton from '../../../components/table/EditButton';
import Pagination from '../../../components/table/Pagination';
import MultipleSelectFilter from '../../../components/table/multipleSelectFilter/MultipleSelectFilter';
import SearchBar from '../../../components/table/searchBar/SearchBar';
import useGetUsers from '../../../react-query/users/useGetUsers';
import getAccountType from '../../../utils/getAccountType';
import ToggleUserStatusBtn from './ToggleUserStatusBtn';

const UsersTable = () => {
  const { users, pagination, isLoading, isError } = useGetUsers();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  return (
    <div>
      <Button className="ml-auto block mb-6">Tạo mới tài khoản</Button>
      <div className="bg-white">
        <div className="p-5 flex items-center justify-between">
          <MultipleSelectFilter
            fieldName="account_type"
            options={[
              { value: 'admin', name: 'Quản trị viên' },
              { value: 'business', name: 'Nhà tuyển dụng' },
              { value: 'personal', name: 'Người lao động' },
            ]}
          />
          <SearchBar placeholder="Tìm người dùng theo tên hoặc email" />
        </div>
        <table className="shared-table border">
          <thead>
            <tr>
              <th>Ảnh đại diện</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Loại tài khoản</th>
              <th>Trạng thái tài khoản</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr className="hover:bg-gray-50" key={user._id}>
                <td className="text-center">
                  <Avatar className="!w-10 uppercase" />
                </td>
                <td>
                  <KeywordHighlighter
                    textToHighlight={user.name}
                    searchWords={[keyword]}
                  />
                </td>
                <td>
                  <KeywordHighlighter
                    textToHighlight={user.email}
                    searchWords={[keyword]}
                  />
                </td>
                <td>{user.phone}</td>
                <td>{getAccountType(user.role, user.account_type)}</td>
                <td className="text-center">{user.status}</td>
                <td>
                  <div className="flex items-center justify-center gap-x-6">
                    <ToggleUserStatusBtn status={user.status} />
                    <EditButton />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
};

export default UsersTable;
