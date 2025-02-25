import { ResetForm } from "@/components/auth/reset-form";
import React, { Suspense } from "react";

const ResetPage = () => {
  return (
    <Suspense>
      <ResetForm />
    </Suspense>
  );
};

export default ResetPage;
