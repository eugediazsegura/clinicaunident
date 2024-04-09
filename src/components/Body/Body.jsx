import { Appointent } from "./components/Appointment/Appointent"
import { Banner } from "./components/Banner/Banner"
import { Centers } from "./components/Centers/Centers"
import { Treatments } from "./components/Treatments/Treatments"
import { AppTheme } from "../theme"

export const Body = () => {
  return (
    <>
        <Banner />
        <div className="main-container">
          <Centers />
          <Treatments />
        </div>
        <AppTheme>
          <Appointent />
        </AppTheme>
    </>
  )
}
