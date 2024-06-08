"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function NavigationCrumbs() {
  const pathname = usePathname();

  const links = pathname.split("/");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((el, i) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${el}`}>{el}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
