// -------------------------------------------------------
// Draws bars
// Draw some bars in a rainbow

/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
	ctx.fillRect(0, 0, width, height)
	ctx.fill()

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	const colorStep = 360 / bars

    ctx.lineWidth = 3

    const halfW = width * 0.5
    const halfH = height * 0.5

    const qx = width * 0.25
    const qy = height * 0.25

	frequencyArray.forEach((f, i) => {
        const clockStep = Math.PI * 3 / 12
        // const centerX = width / 2
        // const centerY = height / 2

        const w = f / 255 * width
        const h = f / 255 * height

        const x1 = qx - w * 0.5
        const y1 = halfH - h * 0.5
        const x2 = (qx * 3) - w * 0.5
        const y2 = (qy * 3) - h * 0.5

        const radius = f / 255 * 300
		// Begin a new path
		ctx.beginPath()
		// Draw a circle of radius
        ctx.arc(x1, y1, radius, 0, clockStep)
        ctx.arc(x2, y1, radius, 0, clockStep)
        ctx.arc(x2, y2, radius, 0, clockStep)
        ctx.arc(x1, y2, radius, 0, clockStep)
		// set stroke color
		ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 0.1)`
		// stroke path
		ctx.stroke()

        // for (let i = 0; i < 24; i += 1) {
        //     const x = Math.sin(clockStep * i) * 5 * i + centerX
        //     const y = Math.cos(clockStep * i) * 5 * i + centerY
        //     const radius = f / 255 * i
        //     ctx.beginPath()
        //     ctx.arc(x, y, radius, 0, Math.PI * 2)
        //     ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 0.1)`
        //     ctx.stroke()
        // }
    })
    
    // const clockStep = Math.PI * 2 / 12
    // const centerX = width / 2
    // const centerY = height / 2

    // for (let i = 0; i < 24; i += 1) {
    //     const x = Math.sin(clockStep * i) * 5 * i + centerX
    //     const y = Math.cos(clockStep * i) * 5 * i + centerY
    //     ctx.beginPath()
    //     ctx.arc(x, y, i * 1, 0, Math.PI * 2)
    //     ctx.fillStyle = '#000'
    //     ctx.fill()
    // }
}

export default render