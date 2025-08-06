const radiusValue = document.querySelector('#radius-value')
const square = document.querySelector('#square')
const copyBtn = document.querySelector('#copy-btn')

const radiusValueTL = document.querySelector('#radius-value-tl')
const radiusValueTR = document.querySelector('#radius-value-tr')
const radiusValueBL = document.querySelector('#radius-value-bl')
const radiusValueBR = document.querySelector('#radius-value-br')



radiusValue.addEventListener('input', () => {
    const radiusValueVal = radiusValue.value

    square.style.borderRadius = `${radiusValueVal}px`
    radiusValue.style.borderRadius = `${radiusValueVal}px`
    console.log(radiusValueVal)
})

radiusValueTL.addEventListener('input', () => {
    const radiusValueVal = radiusValueTL.value

    square.style.borderTopLeftRadius = `${radiusValueVal}px`
    radiusValueTL.style.borderTopLeftRadius = `${radiusValueVal}px`

})

radiusValueTR.addEventListener('input', () => {
    const radiusValueVal = radiusValueTR.value

    square.style.borderTopRightRadius = `${radiusValueVal}px`
    radiusValueTR.style.borderTopRightRadius = `${radiusValueVal}px`

})

radiusValueBL.addEventListener('input', () => {
    const radiusValueVal = radiusValueBL.value

    square.style.borderBottomLeftRadius = `${radiusValueVal}px`
    radiusValueBL.style.borderBottomLeftRadius = `${radiusValueVal}px`

})

radiusValueBR.addEventListener('input', () => {
    const radiusValueVal = radiusValueBR.value

    square.style.borderBottomRightRadius = `${radiusValueVal}px`
    radiusValueBR.style.borderBottomRightRadius = `${radiusValueVal}px`

})


copyBtn.addEventListener('click', () => {
    const topLeft = square.style.borderTopLeftRadius
    const topRight = square.style.borderTopRightRadius
    const bottomLeft = square.style.borderBottomLeftRadius
    const bottomRight = square.style.borderBottomRightRadius
    copyValues (topLeft, topRight, bottomLeft, bottomRight)
})

async function copyValues (topLeft, topRight, bottomLeft, bottomRight) {
    try {
        await navigator.clipboard.writeText(`${topLeft} ${topRight} ${bottomLeft} ${bottomRight}`)
        alert(`Values ${topLeft}, ${topRight}, ${bottomLeft}, ${bottomRight} were copied`)
    } catch(error) {
        console.error(error)
    }

}



