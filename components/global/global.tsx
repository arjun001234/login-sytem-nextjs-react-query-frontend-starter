import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import reactQueryClient from "../../reactQueryClient";
import ErrorBoundary from "../ui/errorBoundary";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../context/authContext";
import GlobalLoadingIndicator from "../ui/globalLoadingIndicator";
import ProtectedRoutes from "./protectedRoutes";
import { NextRouter } from "next/router";

type GlobalRouterProps = {
  children: React.ReactNode,
  router: NextRouter
}

const GlobalWrapper: React.FC<GlobalRouterProps> = ({ children,router }) => {
  return (
    <ErrorBoundary
      fallback={(error) => <div>Something went wrong: {error}</div>}
    >
      <QueryClientProvider client={reactQueryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <ReactQueryDevtools />
        <GlobalLoadingIndicator />
        <AuthProvider>
          <ProtectedRoutes router={router}>{children}</ProtectedRoutes>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default GlobalWrapper;
