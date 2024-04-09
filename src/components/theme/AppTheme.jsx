import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { basicTheme } from './'

// eslint-disable-next-line react/prop-types
export const AppTheme =  ({ children }) => {
  return (
    <ThemeProvider theme={basicTheme}>
        <CssBaseline>
            { children } 
        </CssBaseline>
    </ThemeProvider>
  )
}
