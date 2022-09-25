/**
 * Generate a random color hex.
 *
 * @see [CSS-Tricks](https://css-tricks.com/snippets/javascript/random-hex-color/)
 */
export const randomColor = () => {
    const color = Math.floor(Math.random()*16777215).toString(16)
    return `#${color}`
}
