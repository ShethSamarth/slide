import { Navbar } from "@/components/global/navbar"
import { Sidebar } from "@/components/global/sidebar"

type SlugLayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

const SlugLayout = async ({ children, params }: SlugLayoutProps) => {
  const { slug } = await params

  return (
    <div className="p-3">
      <Sidebar slug={slug} />
      <div className="flex flex-col overflow-auto lg:ml-[250px] lg:py-5 lg:pl-10">
        <Navbar slug={slug} />
        {children}
      </div>
    </div>
  )
}

export default SlugLayout
