import React from 'react'
export const GlobalContext = React.createContext({})
const GlobalStateContext = ({children} : {children:React.ReactNode}) => {



    
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext