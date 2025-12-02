// app/components/not-found-wrapper.tsx
'use client';

import { useEffect } from 'react';

export function NotFoundWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Override the root body overflow when this page mounts
    document.body.style.overflowY = 'auto';

    return () => {
      // Reset it when leaving the page (if navigating back)
      document.body.style.overflowY = 'hidden';
    };
  }, []);

  return <>{children}</>;
}
