import { animated, SpringValue } from "react-spring";

const NavBracketSVG = ({
    translateX,
    rotate,
    stage,
}: {
    translateX: number;
    rotate: number;
    stage: SpringValue<number>;
}) => (
    <svg
        viewBox={"0 0 228 455"}
        style={{
            transform: `translateX(${translateX}px) rotate(${rotate}deg)`,
        }}
    >
        <animated.path
            d={stage.to({
                range: [0, 1],
                output: [
                    "M 54.5 226.1 C 97.7 205.2 184.7 163.3 228 142.4 L 228 97 C 171.2 126 56.8 184.3 0 213.3 L 0 241.7 C 56.8 270.7 171.2 329 228 358 L 228 312.6 C 184.8 291.7 97.8 249.7 54.5 228.9 L 54.5 226.1 Z",
                    "M 41.9 224.9 C 149.1 214.2 32.5 32.4 145.6 34.9 L 145.6 0 C -29.5 -1.9 123.5 211.2 0 206.2 L 0 248.9 C 123.5 243.9 -29.5 457 145.6 455.1 L 145.6 420.3 C 32.5 422.8 149.1 241 41.9 230.3 L 41.9 224.9 Z",
                ],
            })}
        />
    </svg>
);

NavBracketSVG.defaultProps = {
    translateX: 0,
    rotate: 0,
    stage: 0,
};
export default NavBracketSVG;
