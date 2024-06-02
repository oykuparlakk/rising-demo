interface UserInfoProps {
    info: any;
  }
  
  const UserInfo = ({ info }: UserInfoProps) => (
    <div>
      <h2 className="text-2xl font-semibold mb-2">User Info</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
  
  export default UserInfo;
  