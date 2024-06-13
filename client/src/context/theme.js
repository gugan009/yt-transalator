import React from 'react'

const Theme = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default Theme