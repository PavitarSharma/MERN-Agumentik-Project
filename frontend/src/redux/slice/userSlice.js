import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../../utils/authHeader";

// const BASE_URL = "https://mern-agumentik-backend.onrender.com/api/users";
const BASE_URL = "http://localhost:5000/api/users";
const user = JSON.parse(localStorage.getItem("user"));

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/signUp`,
        {
          name,
          email,
          password,
        },
        config
      );

      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        config
      );

      if (data) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      }

      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAllUser = createAsyncThunk(
  "auth/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}`, {
        headers: authHeader(),
      });

      return data;
    } catch (error) {
      console.error(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateUserRole = createAsyncThunk(
  "auth/updateUserRole",
  async ({ id, role }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `${BASE_URL}/role/${id}`,
        { role },
        {
          headers: authHeader(),
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateSocialLinks = createAsyncThunk(
  "auth/updateSocialLink",
  async (jsonData, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON

      const { data } = await axios.put(
        `${BASE_URL}/profile/${user._id}`,
        jsonData,
        {
          headers: authHeader(),
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    users: [],
    loading: false,
    success: false,
    error: false,
    token: null,
    message: "",
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.user = null;
        state.success = false;
        state.error = action.payload;
      })

      .addCase(signIn.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = true;
        state.message = action.payload.message;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.user = null;
        state.success = false;
        state.error = action.payload;
      })

      .addCase(getAllUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.error = null;
        state.success = true;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
        state.message = true;
        state.users = null;
        state.error = action.payload;
      })

      .addCase(updateSocialLinks.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateSocialLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
      })
      .addCase(updateSocialLinks.rejected, (state, action) => {
        state.loading = false;
        state.message = true;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(updateUserRole.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = true;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.success = false;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
