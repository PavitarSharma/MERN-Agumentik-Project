import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, updateUserRole } from "../../redux/slice/userSlice";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error, users, user } = useSelector((state) => state.users);
  const [userRole, setUserRole] = useState("");
  const [userId, setUserId] = useState(null);
  let path = "/";
  if (location.state) {
    path = location.state.path;
  }
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    if(user.role==="user"){
     navigate(path) ;
    }
  }, [user,navigate,path])

  const selectUserRole = (id) => {
    let user = users.filter((user) => user._id === id);
    setUserRole(user[0].role);
    setUserId(user[0]._id);
  };

  const updateRole = () => {
    dispatch(updateUserRole({ id: userId, role: userRole }));
    if (user.role === "user") {
      navigate("/");
    }
  };

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
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "80px",
          gap: "20px",
        }}
      >
        <InputBase
          id="role"
          type="role"
          name="role"
          onChange={(event) => setUserRole(event.target.value)}
          value={userRole}
          placeholder="Update Role"
          sx={{
            border: "1px solid gray",
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={updateRole}
          sx={{
            padding: "10px",
            color: "white",
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: "16px",
            background: "blue",
            padding: "12px 30px",
          }}
        >
          Update
        </Button>
      </Box>
      <Box
        sx={{
          overflow: "scroll",
        }}
      >
        <table className="table">
          <tbody className="table-body">
            <tr>
              <td>id</td>

              <td>Name</td>

              <td>Email</td>

              <td>Type</td>
            </tr>
            {users &&
              users?.map((user, index) => {
                const { name, email, role } = user;
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>

                    <td>{name}</td>

                    <td>{email}</td>

                    <td className="px-6 py-2 text-md text-gray-500 capitalize cursor-pointer">
                      {role}
                    </td>

                    <td>
                      <EditIcon onClick={() => selectUserRole(user._id)} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Box>
    </Stack>
  );
}
