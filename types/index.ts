import {z} from "zod"
import { insertProductSchema } from "@/lib/validators"

export type Product = z.infer<typeof insertProductSchema> &{
    id: string;//<< not in zod schema
    rating: string;
    createdAt: Date;
}