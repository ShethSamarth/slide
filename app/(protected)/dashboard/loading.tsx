import { Loader } from "lucide-react"

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="size-6 animate-spin" />
    </div>
  )
}

export default Loading
