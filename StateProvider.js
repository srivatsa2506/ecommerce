import React from 'react'
import { useContext,createContext,useReducer } from 'react'
export const StateContext=createContext();
function StateProvider() {
  return (
    <div>StateProvider</div>
  )
}

export default StateProvider