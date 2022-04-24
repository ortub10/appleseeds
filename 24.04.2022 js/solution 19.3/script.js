const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((element,index)=>{
  element.addEventListener('keydown',(e)=>{
    if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
  })
  element.addEventListener('input',(e)=>{
    const [first,...rest] = e.target.value
    e.target.value = first ?? '' 
    const lastInputBox = index===inputElements.length-1
    const insertedContent = first!==undefined
    if(insertedContent && !lastInputBox) {
      inputElements[index+1].focus()
      inputElements[index+1].value = rest.join('')
      inputElements[index+1].dispatchEvent(new Event('input'))
    }
  })
})
