import { clsx } from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]){
    //merge content inside the classname for components 
    return twMerge(clsx(inputs));
}