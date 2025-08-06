const radiusValue = document.querySelector('#radius-value')
const square = document.querySelector('#square')
const radiusSlider = document.querySelector('#radius-value')

console.log(radiusSlider)

radiusValue.addEventListener('change', () => {
    const radiusValueVal = radiusValue.value

    square.style.borderRadius = `${radiusValueVal}px`
    radiusValue.style.borderRadius = `${radiusValueVal}px`
    console.log(radiusValueVal)
})

