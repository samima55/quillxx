import { cn } from "@/lib/utils";
import { ReactNode } from "react";


const MaxWidthWrapper = ({className,children}:{
    className?: string 
    children : ReactNode
}) =>{
    //cn function will merge the styles of coming class with this default styles
    return <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}>
    {children}
   </div>
}
export default MaxWidthWrapper;