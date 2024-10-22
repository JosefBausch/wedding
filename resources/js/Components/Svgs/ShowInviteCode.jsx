export default function ShowInviteCode(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="248"
            height="271.275"
            viewBox="0 0 248 271.275"
        >
            <defs>
                <filter
                    id="Rectangle_1"
                    x="50"
                    y="0"
                    width="198"
                    height="270"
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodOpacity="0.231" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="Path_1"
                    x="0"
                    y="193.725"
                    width="87.444"
                    height="77.55"
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-2" />
                    <feFlood floodOpacity="0.161" />
                    <feComposite operator="in" in2="blur-2" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_1)">
                <g
                    id="Rectangle_1-2"
                    data-name="Rectangle 1"
                    transform="translate(59 6)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="4"
                >
                    <rect width="180" height="252" rx="22" stroke="none" />
                    <rect
                        x="2"
                        y="2"
                        width="176"
                        height="248"
                        rx="20"
                        fill="none"
                    />
                </g>
            </g>
            <g
                id="Rectangle_2"
                data-name="Rectangle 2"
                transform="translate(67 209)"
                fill="#fff"
                stroke="#fda4af"
                strokeWidth="4"
            >
                <rect width="164" height="41" rx="15" stroke="none" />
                <rect x="2" y="2" width="160" height="37" rx="13" fill="none" />
            </g>
            <text
                id="_-_-_"
                data-name="###-##-####"
                transform="translate(88 238)"
                fill="#fda4af"
                fontSize="20"
                fontFamily="SegoeUI-Bold, Segoe UI"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    ###-##-####
                </tspan>
            </text>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
                <path
                    id="Path_1-2"
                    data-name="Path 1"
                    d="M1.478,90.2a4.968,4.968,0,0,0,0,7.022l24.8,24.8A4.966,4.966,0,1,0,33.3,115L16.949,98.661h47.56a4.961,4.961,0,0,0,0-9.921H16.965L33.288,72.4a4.966,4.966,0,0,0-7.022-7.022l-24.8,24.8Z"
                    transform="translate(78.47 323.2) rotate(180)"
                    fill="#93c5fd"
                />
            </g>
        </svg>
    );
}
