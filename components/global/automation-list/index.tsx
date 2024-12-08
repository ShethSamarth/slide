"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePath } from "@/hooks/use-path"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/global/gradient-button"

export const AutomationList = () => {
  const { pathname } = usePath()

  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/12345`}
        className="radial--gradient--automations flex rounded-xl border-[1px] border-[#545454] bg-[#1D1D1D] p-5 transition duration-100 hover:opacity-80"
      >
        <div className="flex flex-1 flex-col items-start">
          <h2 className="text-xl font-semibold">Automation Name</h2>
          <p className="mb-2 text-sm font-light text-[#9B9CA0]">
            This is from the comment
          </p>

          <div className="mt-3 flex flex-wrap gap-x-2">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "border-2 border-keyword-green bg-keyword-green/15",
                (1 + 1) % 2 == 0 &&
                  "border-2 border-keyword-purple bg-keyword-purple/15",
                (2 + 1) % 3 == 0 &&
                  "border-2 border-keyword-yellow bg-keyword-yellow/15",
                (3 + 1) % 4 == 0 &&
                  "border-2 border-keyword-red bg-keyword-red/15"
              )}
            >
              Keyword
            </div>
          </div>

          <div className="mt-3 rounded-full border-2 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3]">No Keywords</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-sm font-light capitalize text-[#9B9CA0]">
            December 25th 2024
          </p>

          {false ? (
            <GradientButton
              type="BUTTON"
              className="w-full bg-background-80 text-white hover:bg-background-80"
            >
              Smart AI
            </GradientButton>
          ) : (
            <Button className="bg-background-80 text-white hover:bg-background-80">
              Standard
            </Button>
          )}
        </div>
      </Link>
    </div>
  )
}
