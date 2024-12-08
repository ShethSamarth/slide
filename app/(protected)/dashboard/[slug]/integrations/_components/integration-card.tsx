"use client"

import { Button } from "@/components/ui/button"

type IntegrationCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  strategy: "INSTAGRAM" | "CRM"
}

export const IntegrationCard = ({
  title,
  description,
  icon,
  strategy
}: IntegrationCardProps) => {
  return (
    <div className="flex items-center justify-between gap-x-5 rounded-2xl border-2 border-[#3352CC] p-5">
      {icon}

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p className="text-base text-[#9D9D9D]">{description}</p>
      </div>

      <Button
        disabled={false}
        onClick={() => {}}
        className="rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-lg font-medium text-white transition duration-100 hover:opacity-70"
      >
        {false ? "Connected" : "Connect"}
      </Button>
    </div>
  )
}
