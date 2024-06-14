import { Link } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "../ui/breadcrumb"

const Faqs = () => {
    return (
        <div>
            <div className="breadcrumbs">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {/* ... */}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="faqs">

            </div>
        </div>
    )
}

export default Faqs
