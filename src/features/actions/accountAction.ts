import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL, encryptedToken } from "../../utils/constants"
import type { UserRequest } from "../../utils/interfaces"
import type { RootState } from "../../app/store"
import { putToken } from "../slices/tokenSlice"

export const registerFetch = createAsyncThunk(
  "account/registerFetch",
  async (registerUser: UserRequest, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      body: JSON.stringify(registerUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!response.ok) {
      throw new Error(response.status + ", status")
    }
    return await response.json()
  }
)

export const logInFetch = createAsyncThunk(
  "account/logInFetch",
  async (token: string, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Authorization": token
      }
    })
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
    return await response.json()
  }
)

export const changeUserFetch = createAsyncThunk(
  "account/changeUserFetch",
  async (newUser: { firstName: string, lastName: string }, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const token = state.token
    const response = await fetch(`${BASE_URL}/user`, {
      method: "PUT",
      body: JSON.stringify(newUser),
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      }
    })
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
    return await response.json()
  }
)

//TODO Deploy to GitHub


export const changePasswordFetch = createAsyncThunk(
  "account/changePasswordFetch",
  async (passwords: { oldPassword: string, newPassword: string }, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const login = state.user.data?.login!;

    if(passwords.oldPassword === passwords.newPassword){
      throw new Error('The new password should be different from the old password')
    }
    const response = await fetch(`${BASE_URL}/user/password`, {
      method: "PUT",
      headers: {
        "Authorization": encryptedToken(login, passwords.oldPassword),
        "X-Password": passwords.newPassword
      }
    })
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
    console.log('New pass', passwords.newPassword)
    thunkAPI.dispatch(putToken(encryptedToken(login!, passwords.newPassword)))
  }
)