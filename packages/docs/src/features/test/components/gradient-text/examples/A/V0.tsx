export const V0 = (_props: unknown): JSX.Element => {
    return (
        <svg width="200px" height="200px" viewBox="0 0 125 115">
            <defs>
                <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
                    <stop stopColor="#FF5B99" offset="0%"/>
                    <stop stopColor="#FF5447" offset="20%"/>
                    <stop stopColor="#FF7B21" offset="40%"/>
                    <stop stopColor="#EAFC37" offset="60%"/>
                    <stop stopColor="#4FCB6B" offset="80%"/>
                    <stop stopColor="#51F7FE" offset="100%"/>
                </linearGradient>
            </defs>
            <text fill="url(#rainbow)">
                <tspan
                    fontSize="30"
                    x="0"
                    y="30"
                >
                    gradient
                </tspan>
                <tspan fontSize="65" x="0" dy="60">text</tspan>
                <tspan fontSize="20" x="0" dy="20">all up in here</tspan>
            </text>
        </svg>
    )
}
