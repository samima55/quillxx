import { useRouter, useSearchParams } from "next/navigation";

const page  = () => {
    const router = useRouter();
    const searchParams =useSearchParams();
    const origin = searchParams.get('origin');
  return(

  )
}

export  default page ;
