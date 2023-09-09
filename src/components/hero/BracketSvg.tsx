const BracketSvg = () => (
    <svg viewBox={"0 0 228 455"}>
        <path
            fill={"#ffffff"}
            d={
                "M 54.5 226.1 C 97.7 205.2 184.7 163.3 228 142.4 L 228 97 C 171.2 126 56.8 184.3 0 213.3 L 0 241.7 C 56.8 270.7 171.2 329 228 358 L 228 312.6 C 184.8 291.7 97.8 249.7 54.5 228.9 L 54.5 226.1 Z"
            }
        >
            <animate
                id={"first"}
                begin={"indefinite"}
                attributeName={"d"}
                fill={"freeze"}
                from={
                    "M 54.5 226.1 C 97.7 205.2 184.7 163.3 228 142.4 L 228 97 C 171.2 126 56.8 184.3 0 213.3 L 0 241.7 C 56.8 270.7 171.2 329 228 358 L 228 312.6 C 184.8 291.7 97.8 249.7 54.5 228.9 L 54.5 226.1 Z"
                }
                to={
                    "M 41.9 224.9 C 149.1 214.2 32.5 32.4 145.6 34.9 L 145.6 0 C -29.5 -1.9 123.5 211.2 0 206.2 L 0 248.9 C 123.5 243.9 -29.5 457 145.6 455.1 L 145.6 420.3 C 32.5 422.8 149.1 241 41.9 230.3 L 41.9 224.9 Z"
                }
                dur={"0.4s"}
            />
            <animate
                id={"second"}
                begin={"indefinite"}
                attributeName={"d"}
                fill={"freeze"}
                from={
                    "M 41.9 230.3 C 149.1 241 32.5 422.8 145.6 420.3 L 145.6 455.1 C -29.5 457 123.5 243.9 0 248.9 L 0 206.2 C 123.5 211.2 -29.5 -1.9 145.6 0 L 145.6 34.9 C 32.5 32.4 149.1 214.2 41.9 224.9 L 41.9 224.9 L 41.9 230.3"
                }
                to={
                    "M 40.1 420.2 C 62.067 420.2 84.033 420.2 106 420.2 L 106 455 C 70.667 455 35.333 455 0 455 L 0 0 C 35.333 0 70.667 0 106 0 L 106 34.8 C 84.033 34.8 62.067 34.8 40.1 34.8 L 40.1 420.2 L 40.1 420.2"
                }
                dur={"0.4s"}
            />
            <animate
                id={"third"}
                begin={"indefinite"}
                attributeName={"d"}
                fill={"freeze"}
                from={
                    "M 40.1 34.8 C 62.067 34.8 84.033 34.8 106 34.8 L 106 0 C 70.667 0 35.333 0 0 0 L 0 455 C 35.333 455 70.667 455 106 455 L 106 420.2 C 84.033 420.2 62.067 420.2 40.1 420.2 L 40.1 420.2 L 40.1 34.8"
                }
                to={
                    "M 54.5 226.1 C 97.7 205.2 184.7 163.3 228 142.4 L 228 97 C 171.2 126 56.8 184.3 0 213.3 L 0 241.7 C 56.8 270.7 171.2 329 228 358 L 228 312.6 C 184.8 291.7 97.8 249.7 54.5 228.9 L 54.5 226.1 L 54.5 226.1"
                }
                dur={"0.4s"}
            />
        </path>
    </svg>
);
export default BracketSvg;
