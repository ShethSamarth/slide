"use client"

import { ChevronRight, Pencil } from "lucide-react"

import { ActivateAutomationButton } from "@/components/global/activate-automation-button"

type AutomationsBreadCrumbProps = {
  id: string
}

export const AutomationsBreadCrumb = ({ id }: AutomationsBreadCrumbProps) => {
  return (
    <div className="flex w-full items-center rounded-full bg-[#18181B1A] p-5">
      <div className="flex min-w-0 items-center gap-x-3">
        <p className="truncate text-[#9B9CA0]">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />

        <span className="flex min-w-0 items-center gap-x-3">
          <p className="truncate text-[#9B9CA0]">
            This is the automation title
          </p>

          <span className="mr-4 flex-shrink-0 cursor-pointer transition duration-100 hover:opacity-75">
            <Pencil size={14} />
          </span>
        </span>
      </div>

      <div className="ml-auto flex items-center gap-x-5">
        <p className="hidden min-w-0 truncate text-sm text-text-secondary/60 md:block">
          All states are automatically saved
        </p>
        <div className="flex flex-shrink-0 gap-x-5">
          <p className="min-w-0 truncate text-sm text-text-secondary">
            Changes Saved
          </p>
        </div>
      </div>

      <ActivateAutomationButton id={id} />
    </div>
  )
}
