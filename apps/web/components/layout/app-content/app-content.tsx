"use client";

import { Fragment, ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/shadcn/breadcrumb";
import { Separator } from "@/components/shadcn/separator";
import { SidebarInset, SidebarTrigger } from "@/components/shadcn/sidebar";

interface BreadcrumbItemType {
  label: string;
  href: string;
}

const generateBreadcrumbs = (pathname: string): BreadcrumbItemType[] => {
  if (pathname === "/") {
    return [{ label: "Home", href: "/" }];
  }

  const paths = pathname.split("/").filter(Boolean);
  return paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
    return { label, href };
  });
};

export const AppContent = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <SidebarInset>
      <header className="mb-4 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <Fragment key={item.href}>
                  <BreadcrumbItem key={item.href} className="hidden md:block">
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
    </SidebarInset>
  );
};
