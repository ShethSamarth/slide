import { v4 as uuid } from "uuid"

import {
  AutomationDuoToneWhite,
  HomeDuoToneWhite,
  RocketDuoToneWhite,
  SettingsDuoToneWhite
} from "@/components/icons"

export type FieldProps = {
  label: string
  id: string
}

type SideBarProps = {
  icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite />
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsDuoToneWhite />
  }
]
