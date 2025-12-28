import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAtom,
    SiChartdotjs,
    SiCss3,
    SiExpress,
    SiFigma,
    SiGimp,
    SiGit,
    SiGithub,
    SiHtml5,
    SiInkscape,
    SiJavascript,
    SiJquery,
    SiMapbox,
    SiMicrosoftexcel,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPassport,
    SiPhp,
    SiPhpstorm,
    SiReact,
    SiSass,
    SiSlack,
    SiTypescript,
    SiVisualbasic,
    SiVisualstudiocode,
    SiWebpack,
    SiWebstorm,
} from "react-icons/si";
import { SlClock } from "react-icons/sl";
import { ReactNode } from "react";
import { StackItem } from "../../types/portfolioTypes.ts";

const iconMap: {
    [key in StackItem]: {
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
    Express: { icon: <SiExpress />, url: "https://expressjs.com/" },
    NodeJS: { icon: <SiNodedotjs />, url: "https://nodejs.org/" },
    SASS: { icon: <SiSass />, url: "https://sass-lang.com/" },
    VBA: {
        icon: <SiVisualbasic />,
        url: "https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office/",
    },
    Mapbox: {
        icon: <SiMapbox />,
        url: "https://www.mapbox.com/",
    },
    Webpack: {
        icon: <SiWebpack />,
        url: "https://webpack.js.org/",
    },
    Passport: {
        icon: <SiPassport />,
        url: "https://www.passportjs.org/",
    },
    Git: {
        icon: <SiGit />,
        url: "https://git-scm.com/",
    },
    Github: {
        icon: <SiGithub />,
        url: "https://github.com/laurenceks",
    },
    VSC: {
        icon: <SiVisualstudiocode />,
        url: "https://code.visualstudio.com/",
    },
    WebStorm: {
        icon: <SiWebstorm />,
        url: "https://www.jetbrains.com/webstorm/",
    },
    PhpStorm: {
        icon: <SiPhpstorm />,
        url: "https://www.jetbrains.com/phpstorm/",
    },
    Atom: {
        icon: <SiAtom />,
        url: "https://atom-editor.cc/",
    },
    Figma: {
        icon: <SiFigma />,
        url: "https://www.figma.com/",
    },
    Slack: {
        icon: <SiSlack />,
        url: "https://slack.com/",
    },
};
const StackIcon = ({ stackItemId }: { stackItemId: StackItem }) => (
    <div
        className={
            "portfolio-lightbox-stack-icon icon-container cursor-pointer"
        }
        onClick={(e) => {
            e.stopPropagation();
            if (iconMap[stackItemId].url) {
                window.open(iconMap[stackItemId]?.url, "_blank");
            }
        }}
    >
        {iconMap[stackItemId]?.icon || ""}
        <div className={"hidden hidden-transition tag bg-light text-dark z-1"}>
            {">_"} {stackItemId.toLowerCase()}
        </div>
    </div>
);

export default StackIcon;
