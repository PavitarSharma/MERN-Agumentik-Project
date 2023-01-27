import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/slice/userSlice";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";



export default function Users() {
  const dispatch = useDispatch();

  const { loading, error, users, user } = useSelector((state) => state.users);
  const [isUser, setIsUser] = useState(false);
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div>Loading....</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>Error</div>
      </>
    );
  }

  const updateUser = (id) => {
    const findUser = [...users].find((user) => user._id === id);
    if (findUser) {
      setIsUser((prev) => !prev);
      console.log(findUser);
    }
  };
  return (
    <Box
      sx={{
        overflow: "scroll",
      }}
    >
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>id</th>

            <th>Name</th>

            <th>Email</th>

            <th>Type</th>

            <th>Change Role</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {users &&
            users?.map((user, index) => {
              const { name, email, role } = user;
              return (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <th>{name}</th>

                  <th>{email}</th>

                  <th className="px-6 py-2 text-md text-gray-500 capitalize cursor-pointer">
                    {role}
                  </th>
               

                  <th>
                    <select
                      name="role"
                      id="role"
                      value={userRole || ""}
                      onChange={(e) => setUserRole(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </th>
                  <th>
                    <EditIcon onClick={() => updateUser(user._id)} />
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Box>
  );
}
