'use client';

import Image from 'next/image';
import React from 'react';

function Layout({ children }: any) {
  return (
    <div className="overflow-y-auto">
      <Image
        src="/images/backgroundImage.svg"
        alt="background image"
        width={600}
        height={600}
        className="fixed z-[-1] right-[-150px] bottom-[-150px]"
      />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
