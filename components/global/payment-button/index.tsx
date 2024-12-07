import { Button } from "@/components/ui/button"
import { CreditCardIcon, Loader } from "lucide-react"

export const PaymentButton = () => {
  return (
    <Button
      disabled={false}
      onClick={() => {}}
      className="rounded-full bg-gradient-to-br from-[#6d60a3] via-[#9434E6] to-[#CC3BD4] font-bold text-white"
    >
      {false ? <Loader className="size-4 animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  )
}
