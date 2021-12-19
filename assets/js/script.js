function main() {
  const currentNumberWrapper = document.querySelector('#currentNumber')
  const plusButton = document.querySelector('#plusButton')
  const minusButton = document.querySelector('#minusButton')
  const minRange = document.getElementById('minRange')
  const maxRange = document.getElementById('maxRange')
  let currentNumber = parseInt(minRange.value)
  currentNumberWrapper.innerHTML = currentNumber

  function increment() {
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
    disableButton()
    isNegative()
  }

  function decrement() {
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
    disableButton()
    isNegative()
  }

  function disableButton() {
    if (currentNumber > minRange.value) {
      minusButton.disabled = false
      minusButton.style.opacity = '1'
    } else {
      minusButton.disabled = true
      minusButton.style.opacity = '0'
    }

    if (currentNumber < maxRange.value) {
      plusButton.disabled = false
      plusButton.style.opacity = '1'
    } else {
      plusButton.disabled = true
      plusButton.style.opacity = '0'
    }
  }

  function isNegative() {
    if (currentNumber < 0) {
      currentNumberWrapper.style.color = 'red'
    } else {
      currentNumberWrapper.style.color = 'rgb(153, 153, 153)'
    }
  }

  function isValid() {
    if (Number.isInteger(parseInt(minRange.value))) {
      if (Number.isInteger(parseInt(maxRange.value))) {
        return true
      } else {
        maxRange.focus()
        currentNumberWrapper.innerHTML = ''
        return false
      }
    } else {
      minRange.focus()
      currentNumberWrapper.innerHTML = ''
      return false
    }
  }

  isValid()
  isNegative()
  disableButton()
  plusButton.addEventListener('click', increment)
  minusButton.addEventListener('click', decrement)
}

plusButton.style.opacity = '0'
minusButton.style.opacity = '0'
