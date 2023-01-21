import axios from "axios";

import {
  ADDNEW_TODO,
  DELETE_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });

    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("addNewTodo API >> Error->>", error.message);
  }
};

export const getAllTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);

    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("getAllTodo API >> Error->>", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("toggleTodo API >> Error->>", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });

    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("updateTodo API >> Error->>", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  console.log("deleteTodo ---->", id);
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("deleteTodo API >> Error->>", error.message);
  }
};
