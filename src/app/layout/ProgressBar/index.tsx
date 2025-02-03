'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export default function ProgressBar() {
  return (
    <AppProgressBar
      height="4px"
      color="#F97315"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
