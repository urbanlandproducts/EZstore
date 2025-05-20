import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}: {value: number; className?: string}) => {
    // get correct decemal places
    const stringValue = value.toFixed(2)
    // get int float
    const [int, float] = stringValue.split('.')
    return ( 
        <p className={cn("text-2xl", className)}>
            <span className="text-xs align-super">$</span>
            {int}
            <span className="text-xs align-super">.{float}</span>
        </p> 
    );
}
 
export default ProductPrice;