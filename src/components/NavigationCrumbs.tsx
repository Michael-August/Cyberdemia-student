'use client';
import { usePathname } from 'next/navigation';

import Breadcrumb from './ui/breadcrumb';

export function NavigationCrumbs() {
  const pathname = usePathname();

  const links = pathname.split('/');
  return (
    <Breadcrumb
      breadcrumbsArray={links.map((link, index) => {
        const urlParts = links.slice(0, index + 1);
        const url = `${urlParts.join('/')}`;
        return { name: link, url };
      })}
    />
  );
}
