import { Suspense } from "react";
import { Layout } from "@/components/layout";

export default function Default({ children }) {
  return (
    <Suspense>
      <Layout>{children}</Layout>
    </Suspense>
  );
}
