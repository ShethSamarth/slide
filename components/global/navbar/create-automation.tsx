import { Loader } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AutomationDuoToneWhite } from "@/components/icons"

export const CreateAutomation = () => {
  return (
    <Button
      className="rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] py-6 font-medium text-white hover:opacity-80 lg:px-10"
      onClick={() => {}}
    >
      {false ? (
        <Loader className="size-4 animate-spin text-[#9B9CA0]" />
      ) : (
        <AutomationDuoToneWhite />
      )}
      <p className="hidden lg:inline">Create an Automation</p>
    </Button>
  )
}
