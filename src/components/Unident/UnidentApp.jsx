
import {AppProvider} from '../../utils/AppProvider'
import { Body } from "../Body/Body"
import { Header } from "../shared/Header/Header"

export const UnidentApp = () => {
  return (
    <AppProvider>
      <Header />
      <Body />
    </AppProvider>
  )
}
