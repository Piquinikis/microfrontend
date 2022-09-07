import React, { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";

interface Props {
  children?: ReactNode
  fallback: any
}

const RemoteWrapper = ({ children, fallback = null }: Props) => (
  <div>
    <ErrorBoundary>
      <React.Suspense fallback={fallback}>{children}</React.Suspense>
    </ErrorBoundary>
  </div>
);

export default RemoteWrapper;