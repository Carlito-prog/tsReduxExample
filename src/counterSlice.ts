import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './App'

export type initialStateType = {
    theText: string,
    isTouched: boolean
}

const initialState : initialStateType = {
    theText: "No Action",
    isTouched: false,
}

export const counterSlice = createSlice({
  name: 'Text',
  initialState: {
    state : initialState
  },
  reducers: {
    fromLito: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.state.theText = `hello from ${counterSlice.actions.fromLito}`
      state.state.isTouched = true
    },
    fromArNisha: state => {
        state.state.theText = `hello from ${counterSlice.actions.fromArNisha}`
    }
  }
})

export const { fromArNisha, fromLito } = counterSlice.actions

export const SelectCount = (state: RootState) => state.state;
// Still pass action objects to `dispatch`, but they're created for us

// {value: 1}