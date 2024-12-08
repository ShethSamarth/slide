import { SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"

export const Search = () => {
  return (
    <div className="flex flex-1 items-center gap-x-2 overflow-hidden rounded-full border-[1px] border-[#3352CC] px-4 py-1">
      <SearchIcon color="#3352CC" />
      <Input
        placeholder="Search by name, email or status"
        className="flex-1 border-none outline-none ring-0 focus:ring-0"
      />
    </div>
  )
}