import { Box } from "@mui/material"
import {
    Svg,
    G,
    Defs,
    Marker,
    Circle,
    Path,
    Text,
    DrawCommand,
} from "svg4react"

export const V1 = (_props: unknown): JSX.Element => {
    return (
        <Box sx={{
            backgroundColor: "red",
            "& .debug-point": {
                content: '"1"',
            },
        }}>
            <Svg size="512" vb={[50]}>
                <Defs>
                    <Marker id="dot" vb={[10]} refXY={[5]} size={[5]}>
                        <Circle coordinates={[5]} r="0.75" fill="blue" />
                    </Marker>
                </Defs>
                <G>
                    <G id="phone">
                        <path fill="#40545d" d="m26.3665 6.26993c.1596.0921.2855.3181.285.5013-.0005.1837-.1273.2633-.2869.1712-.1663-.096-.2922-.3216-.2917-.5052.0005-.1833.1273-.2633.2936-.1673z" />
                        <path fill="#40545d" d="m31.2681 9.10773c.1596.0921.2855.3102.285.4935-.0005.1836-.1273.2558-.2869.1636l-4.0237-2.323c-.1596-.0922-.2856-.3103-.2851-.4939.0006-.1833.1273-.2555.287-.1633z" />
                        <path fill="#fed44c" d="m36.6372 13.85343c.2793.1612.5113.5631.5104.884l-.0885 31.2181c-.0009.3288-.2344.4544-.5137.2931l-15.6559-9.0389c-.2793-.1613-.5114-.5556-.5104-.8844l.0885-31.2182c.0009-.3209.2344-.4539.5137-.2926z" />
                        <path fill="#56707b" d="m39.7815 12.69473-.0937 34.1047c-.0104.5-.1875.8647-.4687 1.031l-1.8359 1.0556c.2917-.1663.4688-.5208.4688-1.0208l.0937-34.1047c.01049-1.0203-.7187-2.2705-1.60421-2.7914l-15.0418-8.6874c-.4583-.2502-.8645-.2813-1.1562-.1043l1.8358-1.0663c.2917-.177.6979-.1454 1.1459.115l15.0418 8.6772c.89581.5209 1.61451 1.7706 1.61451 2.7914z" />
                        <path fill="#485f69" d="m36.3389 10.97143c.8912.5145 1.6138 1.766 1.6109 2.7901l-.0967 34.0993c-.0029 1.0241-.7302 1.4311-1.6213.9166l-15.0441-8.6857c-.8912-.5145-1.6138-1.7586-1.6109-2.7827l.0967-34.0993c.0029-1.0241.7302-1.4385 1.6214-.924zm.7202 34.9841.0885-31.2181c.0009-.321-.2311-.7227-.5104-.884l-15.6559-9.0389c-.2793-.1613-.5129-.0283-.5138.2927l-.0885 31.2181c-.0009.3288.2311.7231.5105.8844l15.6558 9.0389c.2794.1613.5129.0357.5138-.2931m-9.8148-39.1709c-.1596-.0922-.2864-.02-.2869.1633-.0005.1837.1254.4017.2851.4939l4.0237 2.3231c.1596.0921.2864.02.2869-.1637.0005-.1833-.1254-.4014-.2851-.4935zm-.8778-.5148c-.1663-.0959-.2931-.0159-.2936.1674-.0006.1837.1254.4092.2916.5052.1597.0921.2864.0125.287-.1712.0005-.1833-.1254-.4092-.285-.5014" />
                    </G>
                    <G id="fingerprint" fill="#fff">
                        <path d="m33.8515 23.12323c.1015.0586.1887.1919.2086.32.3345 2.0676.032 3.9113-.828 5.0601-.0393.0539-.1136.0558-.1878.013l-.1093-.0989c-.1013-.1305-.1361-.3034-.0732-.384.805-1.0727 1.0876-2.7974.7723-4.7372-.023-.1481.0516-.2356.1688-.1947.0164.0051.0327.0125.0486.0217z" />
                        <path d="m30.2492 30.54823c-.0294.126-.1482.1328-.2584.0399-.7051-.5903-1.7298-.8625-1.8489-.5237-.0315.0852-.1177.0984-.2036.0488l-.0742-.0562c-.1131-.1105-.1713-.2879-.1318-.3954.0788-.2018.2551-.3022.5485-.2991.6544.0043 2.083.6942 1.9684 1.1857z" />
                        <path d="m27.0624 23.81303c.7637.4409-.6843 1.5155-2.5618.4315-.1016-.0586-.1992-.1196-.2968-.1894-.1211-.0789-.2067-.2498-.1946-.382.0077-.1263.1049-.1656.2136-.1028.0071.0041.0143.0087.0214.0136.0875.06.1753.1153.263.166.911.5259 1.8197.5489 2.3849.0592.0429-.0373.1063-.0331.1703.0039z" />
                        <path d="m30.2735 28.85413c.3377.5145 1.0585.9791 1.4301.6368.0437-.0406.1089-.0363.1742.0013.0459.0266.0919.0695.1305.1252.0935.1396.1126.3079.0381.3727-.5774.5371-1.5988-.2194-2.0513-.9102-.1441-.2181-.2569-.4449-.3658-.6651-1.3461-2.6921-.9807 1.0121-3.607-.0102l-.0352-.0159c-.1054-.0609-.195-.2023-.2142-.3349-.0191-.1459.0633-.2286.1805-.1836.7243.2816 1.437.1967 1.9027-.5016 1.06-1.4457 1.7464.4839 2.4174 1.4855z" />
                        <path d="m25.3059 15.45473c.0557.0322.1113.0877.1541.1597.0818.1462.0813.3033-.0049.3523-.6742.3843-.1266 2.3462-.8338 2.962-.2785.2348-.7087.2023-1.1423-.048-.2304-.1331-.4607-.3246-.6673-.5741-.1053-.1283-.1439-.3033-.085-.3907.0377-.0614.1119-.0637.1888-.0194.0354.0205.0713.0507.1045.0896.1405.1702.3006.3048.4617.3978 1.6966.9796.6708-2.3786 1.6698-2.9476.0431-.0225.0988-.0137.1544.0184z" />
                        <path d="m28.8585 20.16123c.3141 2.7779-1.0793 4.2154-1.4887 3.5056-.0857-.1438-.0852-.3055.001-.3501.8816-.498 1.2487-1.6526 1.0579-3.3361-.0192-.1459.0671-.2219.1844-.1767.1189.05.2272.214.2454.3573z" />
                        <path d="m30.0328 21.29773c.3292 2.4845-.513 4.912-2.9596 4.8682-.1017-.0004-.2034-.0052-.3051-.0101-.2269-.0185-.4381-.028-.6338.0029-.1683.033-.4698.1377-.5295.4945-.0199.1097-.1139.141-.2154.0824l-.0391-.0272c-.1171-.09-.1948-.2651-.1749-.3885.0676-.388.3265-.6388.7218-.7117.2231-.0419.4617-.0256.6925-.0138.0978.0071.1995.0163.2973.0143.9506.0183 1.7421-.4146 2.2294-1.2166.4874-.802.6589-1.9573.4866-3.2569-.1082-.8376-.5438-2.2154-1.3586-2.4028-1.1991-.2763-.2299 2.7485-2.1424 3.6406-.6503.3079-1.4873.2517-2.3586-.1526-.0092-.0038-.0183-.0086-.0274-.0138-.1092-.0631-.1997-.2129-.2102-.3436-.0113-.1458.0749-.2174.1961-.1609.7775.3589 1.5285.4059 2.1121.1358 1.2894-.605 1.131-2.2537 1.3621-2.9851.5449-1.6916 2.5111-.1543 2.8567 2.4449z" />
                        <path d="m31.593 21.56493c.2447 2.6354-2.0101 3.8071-.6366 6.5327.1183.2409.0039.4113-.1691.3114-.2607-.1505-.8522-1.5353-.6371-2.9752.2414-1.5288 1.1649-2.3967 1.013-4.0588-.301-3.1526-4.2227-6.1267-4.9334-2.6953-.4276 1.9353-1.715 2.285-3.099 1.6227-.126-.0722-.2229-.2245-.2337-.3642-.0075-.1391.0788-.2108.1999-.1543 2.5504 1.2228 2.7549-1.8128 2.913-2.2021 1.0318-2.6262 5.2349.296 5.583 3.9831z" />
                        <path d="m32.0597 19.77553c1.6708 4.2357-.3555 4.9521-.1682 6.9109.0494.5141.2708 1.069.5749 1.4424.1013.1258.1399.301.081.3884-.0432.0561-.1136.0603-.1917.0152l-.1054-.0923c-.4288-.5264-.7241-1.2544-.7886-1.9389-.2102-2.1677 1.7779-2.7669.2223-6.6866-1.0129-2.5711-3.6255-5.2988-5.7297-4.6611-.0389.0129-.0851.0031-.1308-.0234-.0649-.0374-.1288-.1082-.1699-.1951-.0739-.1551-.0578-.2985.0401-.3276 2.3894-.7331 5.2802 2.4204 6.366 5.1681z" />
                        <path d="m31.4009 16.18533c1.1925 1.6282 1.7894 3.5866 2.1299 4.9161.0426.1548-.0203.2624-.1337.2418-.0244-.0034-.0493-.0129-.0735-.0269-.0882-.0509-.1691-.1637-.1994-.2836-.3251-1.253-.8832-3.0947-1.9666-4.5743-1.3283-1.7925-4.2844-3.9761-6.087-2.8714-.7406.4533-1.1581 1.4442-1.5283 2.3181-.0316.0809-.1177.0941-.2036.0445l-.0781-.0632c-.1092-.1125-.1674-.2898-.124-.3952.3859-.91.8192-1.941 1.6265-2.4278 1.9879-1.2265 5.217 1.1831 6.6378 3.1219z" />
                        <path d="m32.8004 16.57523c.0856.1439.0891.3032.0029.3524-.0431.029-.0979.0199-.1565-.014-.0547-.0315-.1054-.0832-.1482-.1528-1.5297-2.5995-4.5405-5.5666-7.3791-5.2359-.3404.0417-.6732.1327-.9943.2215l-.1288-.2722-.1317-.2782c.3328-.091.6734-.1866 1.0334-.226 3.0362-.3461 6.2383 2.7818 7.9023 5.6052z" />
                    </G>
                    <G id="not-phone">
                        <G id="notification">
                            <Path fill="#cfd8dd" commands={pathData_front} />
                            <Path
                                fill="#dde4e7"
                                commands={pathData_top}
                                // markerMid="url(#dot)"
                            />
                            {showPoints && <PathPointsTop />}
                            <G id="lines" fill="#616ab1">
                                <path d="m22.3594 34.79093-.0029 1.032-4.9814-2.8761.0029-1.032z" />
                                <path d="m31.4192 37.80223-.0029 1.032-14.0349-8.1035.0029-1.032z" />
                                <path d="m31.4255 35.58613-.0029 1.0316-14.0349-8.1035.0029-1.0316z" />
                            </G>
                        </G>
                        <G id="avatar">
                            <G>
                                <path fill="#ffffff" d="m14.3336 29.79013.0011-.0565.0022-.0033c-.0002.0198-.0013.0401-.0033.0598z" />
                                <path fill="#cfd8dd" d="m14.2136 29.21463c.0537.1002.2468.4605.1931.3603l-.0001.0502c-.0669.101-.5672.8564-.5003.7555l-.1554-.4443-.1377-.3939-.0286-.0818.0288-.0112c.1034-.0405.7036-.2753.6002-.2348z" />
                            </G>
                            <G>
                                <path fill="#ffffff" d="m13.3163 30.04003.1565-.2625c.0297.0698.0561.1401.056.1645-.0071.0002-.1419.0027-.2509.848-.0182-.0771-.3637-1.5424-.3707-1.7155-.0019-.0511-.0049-.1076-.0111-.1646z" />
                                <path fill="#cfd8dd" d="m13.0176 28.52413.0033.0051.5925.9202-.0288.0112.0286.0818-.1404.2351-.1565.2625-.4202-1.1301-.0742-.1997.0001-.0502.0097-.0067z" />
                                <path fill="#40545d" d="m14.3929 29.54913c1.1316 1.2785.6071.4759 1.2353 1.5032.035.0583.0666.1869.0961.3423-1.3751 1.0368-3.3978-.8624-4.2164-2.3962l.0076-.0263c.1272-.4733.369-.3655.3958-.3954.0235-.0281.7487.0559.9203.0766l-.0096.0067-.0001.0502.0742.1997c.0062.057.0092.1135.0111.1646.007.1731.3525 1.6384.3707 1.7155.109-.8453.2438-.8478.2509-.848.0001-.0244-.0263-.0947-.056-.1645l.1404-.2351.1377.3939c-.0291.0436-.0546.0837-.0559.0858.1475.2616.2464 1.1315.2516 1.1773.2969-.9506.3884-1.243.3903-1.4691l.0697-.1052.0001-.0502z" />
                            </G>
                            <G>
                                <path fill="#ffffff" d="m13.9063 30.38063.4284-.647c-.0043.0756.0031.0771-.0154.1954-.0282.1675-.3555 1.2152-.3727 1.2704-.0052-.0458-.1041-.9157-.2516-1.1773.0013-.0021.0268-.0422.0557-.0856z" />
                                <path fill="#fecd82" d="m14.2854 27.22623c.0048.014.0973.2793.0956.8912.003.0011.0616.0223.107-.0516-.0048.0184-.0085.03-.0099.0341.101.0758.0753.6242-.1456.5411.0198.1757-.1543.4595-.1634.4744l.0192.1091-.5749.2249-.5925-.9202.015-.0705c-.0901-.1942-.1568-.6159-.1603-.6381-.165-.1443-.235-.6646-.1625-.734.0126.0314.0293.0624.0523.0981-.0005-.0214-.0105-.4266.0715-.7616.0128.0146.2552.2926.6618.5274.2226.1285.4905.2396.7867.2757z" />
                                <path fill="#40545d" d="m14.3857 26.43963c-.0407.0624-.1764.0224-.1835.0203-.4474-.219-.399-.1282-.3965-.1235.5444-.0214.9728 1.2561.6823 1.7294-.0454.0739-.104.0527-.107.0516.0017-.6119-.0908-.8772-.0956-.8912-.2962-.0361-.5641-.1472-.7867-.2757-.4066-.2348-.649-.5128-.6618-.5274-.082.335-.072.7402-.0715.7616-.1137-.1762-.0734-.2354-.1406-.8191-.0677-.5797.2139-.5936.3337-.6899.2315-.1813 1.0761.5665 1.4272.7639z" />
                                <path fill="#ffffff" d="m13.618 24.83683c1.5484.8941 2.801 3.0636 2.796 4.8441-.0023.8065-.2611 1.395-.6897 1.7137-.0295-.1554-.0611-.284-.0961-.3423-.102-.1667-.2376-.4987-.4568-.6841-.8157-.6881-.8806-1.0534-.9578-1.1536l-.0253.0099-.0192-.1091c.0091-.0149.1832-.2987.1634-.4744.2185.0822.2485-.4783.148-.5363-.001-.0089.0027-.0205.0075-.0389.3297-.5374-.1724-1.7495-.6823-1.7294-.0025-.0047-.0509-.0955.3965.1235.0071.0021.1428.0421.1835-.0203-.3387-.1904-1.1967-.9444-1.4272-.7639-.1198.0963-.4014.1102-.3337.6899.0533.463.0379.5956.0883.721-.0725.0694-.0025.5897.1625.734.0035.0222.0702.4439.1603.6381l-.015.0705-.1892.1241c-.1718-.0207-.8969-.1047-.9204-.0766-.0268.0299-.2686-.0779-.3958.3954l-.0076.0263c-.4414-.8248-.7087-1.7342-.7064-2.5578.0051-1.7806 1.2659-2.499 2.8165-1.6038z" />
                            </G>
                        </G>
                    </G>
                </G>
            </Svg>
        </Box>
    )
}

// =============================================================================

const PathPointsFront = (): JSX.Element => {
    const $pathPoints = pathPoints_front.map(([x, y], i) => {
        return (
            <>
                <Circle
                    key={i}
                    coordinates={[x, y]}
                    r="0.375"
                    fill="red"
                    fillOpacity={0.5}
                />
                <Text
                    coordinates={[x + 0.075, y]}
                    fontSize="0.5px"
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="central"
                >
                    {i + 1}
                </Text>
            </>
        )
    })
    return (
        <>
            {$pathPoints}
        </>
    )
}

const PathPointsTop = (): JSX.Element => {
    const $pathPoints = pathPoints_top.map(([x, y], i) => {
        const [pX, pY] = pathPoints_top[i-1] ?? [0, 0]
        x = x + pX
        y = y + pY
        return (
            <>
                <Circle
                    key={i}
                    coordinates={[x, y]}
                    r="0.375"
                    fill="red"
                    fillOpacity={0.5}
                />
                <Text
                    coordinates={[x + 0.075, y]}
                    fontSize="0.5px"
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="central"
                >
                    {i + 1}
                </Text>
            </>
        )
    })
    return (
        <>
            {$pathPoints}
        </>
    )
}

let showPoints = false
// showPoints = true

const pathPoints_front: [number, number][] = [
    [31.6611, 34.72713], // exact
    [32.3914, 35.99000],
    [32.3751, 41.75980],
    [31.6411, 42.18570],
    [10.9487, 30.23860],
    [10.2196, 28.96790],
    [10.2359, 23.19810],
    [10.9699, 22.78000],
    [31.6611, 33.72713], // need to close it off farther northeast to prevent a gap
    // [31.6611, 34.72713], // exact
]

const pathPoints_top: [number, number][] = [
    [33.8615, 35.13943],
    [33.8615-0.0209, 35.13943-5.7709],
]

const pathData_top: DrawCommand[] = [
    ["m", [[33.8615, 35.13943], [-0.0209, 5.7709]]],
    ["c", [[0, 0.2294, -0.0833, 0.3963, -0.2187, 0.469]]],
    ["l", [[-1.4688, 0.854]]],
    ["c", [[0.1354, -0.0728, 0.2188, -0.2396, 0.2188, -0.4685]]],
    ["l", [[0.0209, -5.7709]]],
    ["c", [[0, -0.469, -0.323, -1.0315, -0.7292, -1.2711]]],
    ["l", [[-20.6928, -11.9446]]],
    ["c", [[-0.2083, -0.1144, -0.3854, -0.1246, -0.5208, -0.0519]]],
    ["l", [[1.4687, -0.854]]],
    ["c", [[0.125, -0.0727, 0.3126, -0.0625, 0.5209, 0.0519]]],
    ["l", [[20.6927, 11.9446]]],
    ["c", [[0.4063, 0.2396, 0.7292, 0.8022, 0.7292, 1.2706]]],
    ["z",[]],
]

const pathData_front: DrawCommand[] = [
    /** start at top right */
    ["M", [[31.6611, 34.72713]]],
    // right-inside
    ["c", [[0.4057, 0.2342, 0.7305, 0.7968, 0.7292, 1.2628]]],
    // // right-bottom (right)
    ["l", [[-0.0163, 5.7698]]],
    // // right-bottom (left)
    ["c", [[-0.0014, 0.4664, -0.3284, 0.6602, -0.734, 0.4259]]],
    // // left-bottom (right)
    ["l", [[-20.6924, -11.9471]]],
    // // left-bottom-curve (left)
    ["c", [[-0.4057, -0.2343, -0.7305, -0.8043, -0.7291, -1.2707]]],
    // // left-top (left)
    ["l", [[0.0163, -5.7698]]],
    // // left-top (right)
    ["c", [[0.0013, -0.466, 0.3283, -0.6523, 0.734, -0.4181]]],
    // // close
    ["L", [[31.6611, 33.72713]]],
    ["z", []],
]
