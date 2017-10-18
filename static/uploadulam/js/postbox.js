var area = document.querySelector('.area')
var div = document.querySelector('.text-area-container')
var editable = document.querySelector('.input')
var counter = document.querySelector('.counter')
var count = document.querySelector('.count')
var maxch = parseInt(document.querySelector('.max-count').innerText)

area.addEventListener('input', function(e) {
  editable.innerText = area.value
  updateCount()
})

editable.addEventListener('blur', function(e) {
  // When the editable box is "empty", the browser might
  // leave a <br> or two there, so this removes them.
  area.value = editable.innerText
  console.log(editable.innerText)
  editable.innerText = area.value.trim()
  updateCount()
})

editable.addEventListener('keyup', updateCount)
editable.addEventListener('paste', updateCount)
editable.addEventListener('cut', updateCount)
editable.addEventListener('input', updateCount)

div.addEventListener('click', function(e) {
  editable.focus()
  updateCount()
})

function updateCount() {
  count.innerText = editable.innerText.length
  if (editable.innerText.length > maxch) {
    counter.className = "counter invalid"
  } else {
    counter.className = "counter"
  }
}

/* init */
editable.innerText = area.value
updateCount()
