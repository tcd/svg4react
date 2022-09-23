import {
    Circle,
    Path,
    PathProps,
    Svg,
} from "svg4react"

import { LiveDemo, Card } from "@app/features/shared"

// <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
// <svg
//     width="256px"
//     height="287px"
//     viewBox="0 0 256 287"
//     version="1.1"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlns:xlink="http://www.w3.org/1999/xlink"
//     preserveAspectRatio="xMidYMid"
// >
//         <path
//             d="M7.96444444,72.3626667 L129.706667,1.47911111 L251.448889,72.3626667 L251.448889,214.016 L129.706667,284.899556 L7.96444444,214.016 L7.96444444,72.3626667 Z"
//             fill="#CC0000"
//         />
//         <path
//             d="M133.12,143.132444 L246.328889,77.9377778 L250.88,209.351111 L133.12,280.462222 L133.12,143.132444 Z"
//             fill="#FFFFFF"
//         />
//         <path
//             d="M248.035556,73.9555556 L247.694222,213.219556 L129.592889,281.713778 L129.024,144.839111 L248.035556,73.9555556 L248.035556,73.9555556 Z M148.707556,156.216889 L149.048889,247.694222 L188.302222,224.824889 L188.188444,155.875556 L207.985778,144.156444 L207.985778,213.333333 L227.783111,201.728 L227.896889,109.112889 L148.707556,156.216889 L148.707556,156.216889 Z"
//             fill="#CC0000"
//         />
//         <path
//             d="M137.443556,2.50311111 C131.982222,-0.568888889 123.221333,-0.568888889 117.76,2.50311111 L9.89866667,64.512 C4.43733333,67.584 0.113777778,75.3208889 0.113777778,81.4648889 L0.113777778,205.482667 C0.113777778,211.740444 4.55111111,219.363556 9.89866667,222.435556 L117.76,284.444444 C123.221333,287.516444 131.982222,287.516444 137.443556,284.444444 L245.304889,222.435556 C250.766222,219.363556 255.089778,211.626667 255.089778,205.482667 L255.089778,81.4648889 C255.089778,75.2071111 250.652444,67.584 245.304889,64.512 L137.443556,2.50311111 L137.443556,2.50311111 Z M233.130667,67.3564444 C238.592,70.4284444 238.592,75.5484444 233.130667,78.6204444 L138.695111,132.892444 C133.233778,135.964444 124.472889,135.964444 119.011556,132.892444 L23.2106667,77.824 C17.7493333,74.752 17.7493333,69.632 23.2106667,66.56 L117.646222,12.288 C123.107556,9.216 131.868444,9.216 137.329778,12.288 L233.130667,67.3564444 L233.130667,67.3564444 Z M8.53333333,90.4533333 C8.53333333,84.1955556 12.9706667,81.6924444 18.3182222,84.7644444 L114.915556,140.288 C120.376889,143.36 124.700444,151.096889 124.700444,157.240889 L124.700444,267.377778 C124.700444,273.635556 120.263111,276.138667 114.915556,273.066667 L18.3182222,217.543111 C12.8568889,214.471111 8.53333333,206.734222 8.53333333,200.590222 L8.53333333,90.4533333 L8.53333333,90.4533333 Z M143.132444,271.36 C137.671111,274.432 133.347556,271.928889 133.347556,265.671111 L133.347556,157.240889 C133.347556,150.983111 137.784889,143.36 143.132444,140.288 L236.885333,86.4711111 C242.346667,83.3991111 246.670222,85.9022222 246.670222,92.16 L246.670222,200.590222 C246.670222,206.848 242.232889,214.471111 236.885333,217.543111 L143.132444,271.36 L143.132444,271.36 Z"
//             fill="#910505"
//         />
// </svg>

const pathProps: PathProps = {
    commands: [

    ],
}

export const NpmCube = (_props: unknown): JSX.Element => {

    return (
        <Card title="NPM Cube">
            <Svg
                width="256px"
                height="287px"
                viewBox="0 0 256 287"
                preserveAspectRatio="xMidYMid"
            >
                <Path
                    d="M7.96444444,72.3626667 L129.706667,1.47911111 L251.448889,72.3626667 L251.448889,214.016 L129.706667,284.899556 L7.96444444,214.016 L7.96444444,72.3626667 Z"
                    fill="#CC0000"
                />
                <Path
                    d="M133.12,143.132444 L246.328889,77.9377778 L250.88,209.351111 L133.12,280.462222 L133.12,143.132444 Z"
                    fill="#FFFFFF"
                />
                <Path
                    d="M248.035556,73.9555556 L247.694222,213.219556 L129.592889,281.713778 L129.024,144.839111 L248.035556,73.9555556 L248.035556,73.9555556 Z M148.707556,156.216889 L149.048889,247.694222 L188.302222,224.824889 L188.188444,155.875556 L207.985778,144.156444 L207.985778,213.333333 L227.783111,201.728 L227.896889,109.112889 L148.707556,156.216889 L148.707556,156.216889 Z"
                    fill="#CC0000"
                />
                <Path
                    d="M137.443556,2.50311111 C131.982222,-0.568888889 123.221333,-0.568888889 117.76,2.50311111 L9.89866667,64.512 C4.43733333,67.584 0.113777778,75.3208889 0.113777778,81.4648889 L0.113777778,205.482667 C0.113777778,211.740444 4.55111111,219.363556 9.89866667,222.435556 L117.76,284.444444 C123.221333,287.516444 131.982222,287.516444 137.443556,284.444444 L245.304889,222.435556 C250.766222,219.363556 255.089778,211.626667 255.089778,205.482667 L255.089778,81.4648889 C255.089778,75.2071111 250.652444,67.584 245.304889,64.512 L137.443556,2.50311111 L137.443556,2.50311111 Z M233.130667,67.3564444 C238.592,70.4284444 238.592,75.5484444 233.130667,78.6204444 L138.695111,132.892444 C133.233778,135.964444 124.472889,135.964444 119.011556,132.892444 L23.2106667,77.824 C17.7493333,74.752 17.7493333,69.632 23.2106667,66.56 L117.646222,12.288 C123.107556,9.216 131.868444,9.216 137.329778,12.288 L233.130667,67.3564444 L233.130667,67.3564444 Z M8.53333333,90.4533333 C8.53333333,84.1955556 12.9706667,81.6924444 18.3182222,84.7644444 L114.915556,140.288 C120.376889,143.36 124.700444,151.096889 124.700444,157.240889 L124.700444,267.377778 C124.700444,273.635556 120.263111,276.138667 114.915556,273.066667 L18.3182222,217.543111 C12.8568889,214.471111 8.53333333,206.734222 8.53333333,200.590222 L8.53333333,90.4533333 L8.53333333,90.4533333 Z M143.132444,271.36 C137.671111,274.432 133.347556,271.928889 133.347556,265.671111 L133.347556,157.240889 C133.347556,150.983111 137.784889,143.36 143.132444,140.288 L236.885333,86.4711111 C242.346667,83.3991111 246.670222,85.9022222 246.670222,92.16 L246.670222,200.590222 C246.670222,206.848 242.232889,214.471111 236.885333,217.543111 L143.132444,271.36 L143.132444,271.36 Z"
                    fill="#910505"
                />
            </Svg>
        </Card>
    )

    const scope = {
        Svg,
        Circle,
    }
    return (
        <LiveDemo
            title="NPM Cube"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
    <Svg size="100px">
        <Circle
            cx={50}
            cy={50}
            r={50}
            fill="#00deaf"
        />
    </Svg>
`
