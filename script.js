const radiusValue = document.querySelector('#radius-value')
const square = document.querySelector('#square')

const radiusValueTL = document.querySelector('#radius-value-tl')
const radiusValueTR = document.querySelector('#radius-value-tr')
const radiusValueBL = document.querySelector('#radius-value-bl')
const radiusValueBR = document.querySelector('#radius-value-br')



radiusValue.addEventListener('change', () => {
    const radiusValueVal = radiusValue.value

    square.style.borderRadius = `${radiusValueVal}px`
    radiusValue.style.borderRadius = `${radiusValueVal}px`
    console.log(radiusValueVal)
})

radiusValueTL.addEventListener('change', () => {
    const radiusValueVal = radiusValueTL.value

    square.style.borderTopLeftRadius = `${radiusValueVal}px`
    radiusValueTL.style.borderTopLeftRadius = `${radiusValueVal}px`

})

radiusValueTR.addEventListener('change', () => {
    const radiusValueVal = radiusValueTR.value

    square.style.borderTopRightRadius = `${radiusValueVal}px`
    radiusValueTR.style.borderTopRightRadius = `${radiusValueVal}px`

})

radiusValueBL.addEventListener('change', () => {
    const radiusValueVal = radiusValueBL.value

    square.style.borderBottomLeftRadius = `${radiusValueVal}px`
    radiusValueBL.style.borderBottomLeftRadius = `${radiusValueVal}px`

})

radiusValueBR.addEventListener('change', () => {
    const radiusValueVal = radiusValueBR.value

    square.style.borderBottomRightRadius = `${radiusValueVal}px`
    radiusValueBR.style.borderBottomRightRadius = `${radiusValueVal}px`

})
