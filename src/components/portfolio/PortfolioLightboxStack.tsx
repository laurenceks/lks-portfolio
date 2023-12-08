import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiChartdotjs,
    SiCss3,
    SiGimp,
    SiHtml5,
    SiInkscape,
    SiJavascript,
    SiJquery,
    SiMicrosoftexcel,
    SiMongodb,
    SiMysql,
    SiPhp,
    SiReact,
    SiTypescript,
} from "react-icons/si";
import { SlClock } from "react-icons/sl";
import { ReactNode } from "react";

const iconMap: {
    [key: string]: {
        icon: ReactNode;
        url: string;
    };
} = {
    ReactJS: { icon: <SiReact />, url: "https://react.dev/" },
    PHP: { icon: <SiPhp />, url: "https://www.php.net/" },
    JavaScript: {
        icon: <SiJavascript />,
        url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    },
    MongoDB: { icon: <SiMongodb />, url: "https://www.mongodb.com/" },
    SQL: { icon: <SiMysql />, url: "https://www.mysql.com/" },
    MySQL: { icon: <SiMysql />, url: "https://www.mysql.com/" },
    Excel: {
        icon: <SiMicrosoftexcel />,
        url: "https://www.microsoft.com/en-gb/microsoft-365/excel",
    },
    Illustrator: {
        icon: <SiAdobeillustrator />,
        url: "https://www.adobe.com/uk/products/illustrator.html",
    },
    Photoshop: {
        icon: <SiAdobephotoshop />,
        url: "https://www.adobe.com/uk/products/photoshop.html",
    },
    "Premiere Pro": {
        icon: <SiAdobepremierepro />,
        url: "https://www.adobe.com/uk/products/premiere.html",
    },
    TypeScript: {
        icon: <SiTypescript />,
        url: "https://www.typescriptlang.org/",
    },
    CSS: {
        icon: <SiCss3 />,
        url: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    HTML: { icon: <SiHtml5 />, url: "https://html.spec.whatwg.org/" },
    jQuery: { icon: <SiJquery />, url: "https://jquery.com/" },
    MomentJS: { icon: <SlClock />, url: "https://momentjs.com/" },
    ChartJS: { icon: <SiChartdotjs />, url: "https://www.chartjs.org/" },
    GIMP: { icon: <SiGimp />, url: "https://www.gimp.org/" },
    Inkscape: { icon: <SiInkscape />, url: "https://inkscape.org/" },
};
const PortfolioLightboxStack = ({
    itemId,
    stack,
}: {
    itemId?: number;
    stack?: string[];
}) => (
    <div className={"d-flex gap-2 flex-wrap my-3"}>
        {stack?.map((x, i) => (
            <div
                className={
                    "portfolio-lightbox-stack-icon icon-container cursor-pointer"
                }
                key={`${itemId}-stack-${i}`}
                onClick={(e) => {
                    e.stopPropagation();
                    iconMap[x].url && window.open(iconMap[x]?.url, "_blank");
                }}
            >
                {iconMap[x]?.icon || ""}
                <div
                    className={
                        "hidden hidden-transition tag bg-light text-dark"
                    }
                >
                    {">_"}
                    {x.toLowerCase()}
                </div>
            </div>
        ))}
    </div>
);

PortfolioLightboxStack.defaultProps = {
    itemID: "",
    stack: [],
};
export default PortfolioLightboxStack;
