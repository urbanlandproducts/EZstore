import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert Prisma Obj to JS Obj

export function convertPrismaObjToJSObj<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}