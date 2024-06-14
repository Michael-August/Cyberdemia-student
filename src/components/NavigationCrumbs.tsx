'use client';
import { usePathname } from 'next/navigation';
import Breadcrumb from './ui/breadcrumb';

export function NavigationCrumbs() {
  const pathname = usePathname();

  const links = pathname.split('/');
  return (
    <Breadcrumb breadcrumbsArray={links.map(link => {return {name: link, url: `/${link}`}})}  />
  );
}
