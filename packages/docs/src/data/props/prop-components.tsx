const Or = ({ noSpaces = false }: { noSpaces?: boolean}): JSX.Element => (
    <>
        {!noSpaces && <>&nbsp;</>}
        <span className="hl__operator">|</span>
        {!noSpaces && <>&nbsp;</>}
    </>
)

const indent: React.ReactNode = (
    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
)

/** String */
const Str = ({ val }: { val: string }) => <span className="hl__string">{val}</span>

/** Keyword */
const Key = ({ val }: { val: string }) => <span className="hl__keyword">{val}</span>
// =============================================================================
// Exports
// =============================================================================


export const number: React.ReactNode = (
    <div className="hl__root">
        <span className="hl__type">number</span>
    </div>
)

export const string: React.ReactNode = (
    <div className="hl__root">
        <span className="hl__type">string</span>
    </div>
)

export const numberOrString: React.ReactNode = (
    <div className="hl__root">
        <span className="hl__type">number</span>
        &nbsp;
        <span className="hl__operator">|</span>
        &nbsp;
        <span className="hl__type">string</span>
    </div>
)

export const circleCoordinates: React.ReactNode = (
    <div className="hl__root">
        <span>[</span>
        <span className="hl__var">cx</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span>
        <span className="hl__var">cy</span>
        <span className="hl__type">: number</span>
        <span>]</span>
    </div>
)

export const polylineCoordinates: React.ReactNode = (
    <div className="hl__root">
        <span>[</span>
        <span className="hl__var">x</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span>
        <span className="hl__var">y</span>
        <span className="hl__type">: number</span>
        <span>][]</span>
    </div>
)

export const lineCoordinates: React.ReactNode = (
    <div className="hl__root">
        <span>[</span>
        <br />{indent}
        <span className="hl__var">x1</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span><br />{indent}
        <span className="hl__var">y1</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span><br />{indent}
        <span className="hl__var">x2</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span><br />{indent}
        <span className="hl__var">y2</span>
        <span className="hl__type">: number</span>,
        <br />
        <span>]</span>
    </div>
)

export const vb: React.ReactNode = (
    <div className="hl__root">
        <span>[</span>
        <span className="hl__var">width</span>
        <span className="hl__type">: number</span>
        <span>,&nbsp;</span>
        <span className="hl__var">height</span>
        <span className="hl__type">?: number</span>
        <span>]</span>
    </div>
)

const alignments = [
    "xMidYMin",
    "xMinYMin",
    "xMaxYMin",
    "xMinYMid",
    "xMidYMid",
    "xMaxYMid",
    "xMinYMax",
    "xMidYMax",
    "xMaxYMax",
]

export const preserveAspectRatio: React.ReactNode = (
    <div className="hl__root">
        <Str val='"none"' />
        <Or />
        <Str val="`" />
        <Key val="${" />
        {alignments.map((a, i) => (
            i === alignments.length - 1 ?
                <>
                    <Str val={`"${a}"`} />
                </>
                :
                <>
                    <Str val={`"${a}"`} /><Or noSpaces />
                </>
        ))}
        <Key val="}" />
        <span>&nbsp;</span>
        <Key val="${" />
        <Str val={`"meet"`} />
        <Or noSpaces/>
        <Str val={`"slice"`} />
        <Key val="}" />
        <Str val="`" />
    </div>
)
