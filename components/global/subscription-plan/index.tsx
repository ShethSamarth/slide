type SubscriptionPlanProps = {
  type: "FREE" | "PRO"
  children: React.ReactNode
}

export const SubscriptionPlan = ({ children, type }: SubscriptionPlanProps) => {
  return "FREE" === type && children
}
