let form = document.querySelector('form')

let inputs = form.querySelectorAll('input')


for(inp of inputs){
    console.log(inp.name)
    console.log(inp.value)
    console.log(inp.defaultValue)
    console.log(' ')
}
