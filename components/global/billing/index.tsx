import { PaymentCard } from "./payment-card"

export const Billing = () => {
  return (
    <div className="container flex w-full flex-col gap-5 lg:w-10/12 lg:flex-row xl:w-8/12">
      <PaymentCard current="FREE" label="FREE" />
      <PaymentCard current="FREE" label="PRO" />
    </div>
  )
}
