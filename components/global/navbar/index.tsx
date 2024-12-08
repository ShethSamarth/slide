"use client"

import { Menu } from "lucide-react"

import { usePath } from "@/hooks/use-path"
import { Logo } from "@/components/global/logo"
import { HelpDuoToneWhite } from "@/components/icons"
import { PAGE_BREAD_CRUMBS } from "@/constants/pages"
import { Separator } from "@/components/ui/separator"
import { Items } from "@/components/global/sidebar/items"
import { ClerkAuthState } from "@/components/global/clerk-auth-state"
import { UpgradeCard } from "@/components/global/sidebar/upgrade-card"
import { SubscriptionPlan } from "@/components/global/subscription-plan"
import { CreateAutomation } from "@/components/global/create-automation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Search } from "./search"
import { Notifications } from "./notifications"
import { MainBreadCrumb } from "../main-bread-crumb"

type NavbarProps = {
  slug: string
}

export const Navbar = ({ slug }: NavbarProps) => {
  const { page } = usePath()
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex justify-end gap-x-3 lg:gap-x-5">
          <span className="flex flex-1 items-center gap-x-2 lg:hidden">
            <Sheet>
              <SheetTrigger className="lg:hidden">
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="backdrop--blur__safari flex h-full w-full flex-col gap-y-5 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding p-3 backdrop-blur-3xl backdrop-filter">
                  <div className="flex items-center justify-center gap-x-2 p-5">
                    <Logo />
                  </div>

                  <div className="flex flex-col py-3">
                    <Items page={page} slug={slug} />
                  </div>

                  <div className="px-16">
                    <Separator
                      orientation="horizontal"
                      className="bg-[#333336]"
                    />
                  </div>

                  <div className="flex flex-col gap-y-5 px-3">
                    <div className="flex gap-x-2">
                      <ClerkAuthState />
                      <p className="text-[#9B9CA0]">Profile</p>
                    </div>
                    <div className="flex gap-x-3">
                      <HelpDuoToneWhite />
                      <p className="text-[#9B9CA0]">Help</p>
                    </div>
                  </div>

                  <SubscriptionPlan type="FREE">
                    <div className="flex flex-1 flex-col justify-end">
                      <UpgradeCard />
                    </div>
                  </SubscriptionPlan>
                </div>
              </SheetContent>
            </Sheet>
          </span>

          <Search />
          <CreateAutomation />
          <Notifications />
        </div>

        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  )
}
