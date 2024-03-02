import { Stack } from "@chakra-ui/react"
import MarksTable from "./components/MarksTable"
import AreaChart from "./components/AreaChart"

const Marks = () => {
  return (
    <Stack gap="24px">
        <AreaChart/>
        <MarksTable/>
    </Stack>
  )
}

export default Marks