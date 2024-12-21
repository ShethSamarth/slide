import { Warning } from "@/components/icons"
import { Trigger } from "@/components/global/automations/trigger"
import { AutomationsBreadCrumb } from "@/components/global/bread-crumbs/automations-bread-crumb"

type AutomationIdProps = {
  params: Promise<{ id: string }>
}

const AutomationId = async ({ params }: AutomationIdProps) => {
  const { id } = await params

  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={id} />

      <div className="flex w-full flex-col gap-y-3 rounded-xl bg-[#1D1D1D] p-5 lg:w-10/12 xl:w-6/12">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>

        <Trigger id={id} />
      </div>
    </div>
  )
}

export default AutomationId
