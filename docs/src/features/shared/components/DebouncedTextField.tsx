import debounce from "lodash/debounce"
import noop from "lodash/noop"
import { useState, useCallback, useRef, useEffect } from "react"
import TextField, { TextFieldProps } from "@mui/material/TextField"

const DEBOUNCE_DURATION = 500

export type DebouncedTextFieldProps = Omit<TextFieldProps, "onChange"> & {
    /** @default 500 */
    debounceDuration?: number
    /** this event is debounced */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    /** this event is **NOT** debounced */
    onRawChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const defaultProps: Partial<DebouncedTextFieldProps> = {
    debounceDuration: DEBOUNCE_DURATION,
    value: "",
    variant: "standard",
    onChange: noop,
    onRawChange: noop,
}

export const DebouncedTextField = (props: DebouncedTextFieldProps): JSX.Element => {

    const {
        debounceDuration,
        value,
        onChange,
        onRawChange,
        ...otherProps
    } = { ...defaultProps, ...props }

    const timerRef = useRef(null)
    const [_value, setValue] = useState(value)
    const [cooledDown, _setCooledDown] = useState(true)
    const componentMounted = useRef(true)

    const setCooledDown = (value: boolean) => {
        _setCooledDown(value)
    }

    const coolDown = () => {
        if (componentMounted?.current == true) {
            setCooledDown(true)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedOnChange = useCallback(
        debounce((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            onChange(event)
        }, debounceDuration),
        [],
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedCoolDown = useCallback(
        debounce(() => {
            coolDown()
        }, debounceDuration + 1500),
        [],
    )

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const value = event.target.value
        setValue(value)
        setCooledDown(false)
        debouncedOnChange(event)
        onRawChange(event)
        timerRef.current = setTimeout(
            debouncedCoolDown,
            (debounceDuration + 1_000),
        )
    }

    useEffect(() => {
        if (cooledDown) {
            setValue(value)
        }
        return () => {
            clearTimeout(timerRef?.current)
            componentMounted.current = false
        }
    }, [cooledDown, value])

    return (
        <TextField
            value={_value}
            variant="standard"
            onChange={handleChange}
            {...otherProps}
        />
    )
}
