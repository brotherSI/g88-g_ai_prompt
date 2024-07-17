import { Suspense } from "react";
import dynamic from "next/dynamic";
import EditPrompt from "@components/EditPrompt";



const Page =()=> {
  return(
    <Suspense>
      <EditPrompt />
    </Suspense>
  );
};

export default Page;