const all = document.querySelector('body')
const inputNode = document.querySelector('input')
const showValueBt = document.querySelector('button')
const deleteText = document.querySelector('.erase')
const result = document.querySelector('.result')

showValueBt.onclick = () => {
    const inputValue = inputNode.value
    result.textContent = inputValue.length

}

deleteText.onclick = () => {
    result.textContent = ''
    inputNode.value = ''
}

console.log(all);
