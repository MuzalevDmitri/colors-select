const cols = document.querySelectorAll('.col')



function generateRandomColor () {
    const hexColors = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color+= hexColors[Math.floor(Math.random() * hexColors.length)]
    }
    return '#' + color
}


function setRandomColor() {
   cols.forEach((col)=>{
       const color = generateRandomColor()
       const text = col.querySelector('h1')
       text.textContent = color

       col.style.background = generateRandomColor()

   })
}

setRandomColor()