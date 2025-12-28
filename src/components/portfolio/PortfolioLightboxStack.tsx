import StackIcon from "../common/StackIcon.tsx";
import { StackItem } from "../../types/portfolioTypes.ts";

const PortfolioLightboxStack = ({
    itemId,
    stack = [],
}: {
    itemId?: number;
    stack?: StackItem[];
}) => (
    <div className={"d-flex gap-2 flex-wrap my-3"}>
        {stack?.map((x) =>
            x ? (
                <StackIcon stackItemId={x} key={`stack-${itemId}-${x}`} />
            ) : null
        )}
    </div>
);

export default PortfolioLightboxStack;
