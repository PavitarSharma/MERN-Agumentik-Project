import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../../utils/authHeader";

const BASE_URL = "https://mern-agumentik-backend.onrender.com/api";
// const BASE_URL = "http://localhost:5000/api";

export const createContent = createAsyncThunk(
  "data/createContent",
  async ({ image, content }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/content`,
        {
          image,
          content,
        },
        {
          headers: authHeader(),
        }
      );
      const data = await res.data;

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

export const getAllContent = createAsyncThunk(
  "content/getAllContent",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/content`, {
        headers: authHeader(),
      });

      if (data) {
        return data;
      }
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

export const getContent = createAsyncThunk(
  "content/getContent",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/content/${id}`, {
        headers: authHeader(),
      });

      if (data) {
        return data;
      }
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

export const updateContent = createAsyncThunk(
  "data/updateContent",
  async ({ id, image, content }, { rejectWithValue }) => {
    try {
      const config = {
        headers: authHeader(),
      };
      const res = await axios.put(
        `${BASE_URL}/content/${id}`,
        { image, content },
        config
      );

      const data = await res.data;
      

      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createPopupMessage = createAsyncThunk(
  "data/createPopupMessage",
  async ({ name, email, contact }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/info`,
        {
          name,
          email,
          contact,
        },
        {
          headers: authHeader(),
        }
      );
      const data = await res.data;
      console.log(data);

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

export const getAllPopupMessages = createAsyncThunk(
  "data/getAllPopupMessages",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/info`, {
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

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    contents: [],
    content: {},
    popupData: {},
    popupDatas: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(createContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload.data;
        state.success = true;
      })
      .addCase(createContent.rejected, (state, action) => {
        state.loading = false;
        state.content = null;
        state.error = true;
        state.error = action.payload;
      })

      .addCase(getAllContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllContent.fulfilled, (state, action) => {
        state.loading = false;
        state.contents = action.payload.data;
        state.error = null;
        state.success = true;
      })
      .addCase(getAllContent.rejected, (state, action) => {
        state.loading = false;
        state.contents = null;
        state.error = true;
      })

      .addCase(getContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload.data;
        state.error = null;
        state.success = true;
      })
      .addCase(getContent.rejected, (state, action) => {
        state.loading = false;
        state.contents = null;
        state.error = true;
      })

      .addCase(updateContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
        state.success = true;
      })
      .addCase(updateContent.rejected, (state, action) => {
        state.loading = false;
        state.content = null;
        state.error = true;
        state.error = action.payload;
      })

      .addCase(createPopupMessage.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createPopupMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.popupData = action.payload.data;
        state.success = true;
      })
      .addCase(createPopupMessage.rejected, (state, action) => {
        state.loading = false;
        state.message = true;
        state.popupData = null;
        state.error = action.payload;
      })

      .addCase(getAllPopupMessages.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllPopupMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.popupDatas = action.payload.datas;
        state.error = null;
        state.success = true;
      })
      .addCase(getAllPopupMessages.rejected, (state, action) => {
        state.loading = false;
        state.message = true;
        state.popupDatas = null;
        state.error = action.payload;
      });
  },
});

export default contentSlice.reducer;
