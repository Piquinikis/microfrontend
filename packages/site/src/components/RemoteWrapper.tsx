import React, { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";

interface Props {
  children?: ReactNode
  fallback: any
}

const RemoteWrapper = ({ children, fallback = null }: Props) => (
  <>
    <ErrorBoundary>
      <React.Suspense fallback={fallback}>{children}</React.Suspense>
    </ErrorBoundary>
  </>
);

export default RemoteWrapper;