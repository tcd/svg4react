export const App = (_props: unknown): JSX.Element => {
    return (
        <div style={styles}>
            <h1>Welcome!</h1>
        </div>
    )
}

// =============================================================================

const styles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "turquoise",
}
