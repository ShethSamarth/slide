import { Loader } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ActiveAutomation } from "@/components/icons/active-automation"

type ActivateAutomationButtonProps = {
  id: string
}

export const ActivateAutomationButton = ({
  id
}: ActivateAutomationButtonProps) => {
  return (
    <Button className="ml-4 rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white hover:opacity-80 lg:px-10">
      {true ? <Loader className="size-4 animate-spin" /> : <ActiveAutomation />}

      <p className="hidden lg:inline">{false ? "Disable" : "Activate"}</p>
    </Button>
  )
}
