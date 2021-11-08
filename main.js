const table = document.querySelector("#table-order")
const hitung = document.querySelector("#hitung")
const reset = document.querySelector("#reset")
const onChange = (event, price, qty, subTotal) => {
  let getPrice = document
    .querySelector(`#${price}`)
    .innerHTML.replace(/\D/g, "")
  if (event.checked) {
    let getQuantity = document.querySelector(`#${qty}`).value
    if (getQuantity !== "") {
      let getSubTotal = getPrice * getQuantity
      document.querySelector(`#${subTotal}`).value = getSubTotal
      reset.disabled = false
      hitung.disabled = false
    } else {
      alert("Input terlebih dahulu quantity barang!")
      event.checked = false
    }
  } else {
    reset.disabled = true
    hitung.disabled = true
    document.querySelector(`#${qty}`).value = ""
    document.querySelector(`#${subTotal}`).value = ""
    document.querySelector(`#total`).value = ""
  }
}
const onChangeInput = (event, price, qty, subTotal, check) => {
  let getPrice = document
    .querySelector(`#${price}`)
    .innerHTML.replace(/\D/g, "")
  if (event.value !== "") {
    let checklist = document.querySelector(`#${check}`).checked
    if (checklist) {
      let getQuantity = document.querySelector(`#${qty}`).value
      if (getQuantity !== "") {
        let getSubTotal = getPrice * getQuantity
        document.querySelector(`#${subTotal}`).value = getSubTotal
      }
    }
  } else {
    document.querySelector(`#${qty}`).value = ""
    document.querySelector(`#${subTotal}`).value = ""
    document.querySelector(`#${check}`).checked = false
    document.querySelector(`#total`).value = ""
  }
}

const resetFn = () => {
  let elements = document.getElementsByTagName("input")
  for (let ii = 0; ii < elements.length; ii++) {
    if (elements[ii].type == "number" || elements[ii].type == "text") {
      elements[ii].value = ""
    }
    if (elements[ii].type == "checkbox") {
      elements[ii].checked = false
    }
  }
}
const countFn = () => {
  let countTable = table.tBodies[0].rows.length + 1
  let total = 0
  for (let index = 1; index < countTable; index++) {
    total += parseInt(document.querySelector(`#jumlah_${index}`).value)
      ? parseInt(document.querySelector(`#jumlah_${index}`).value)
      : 0
  }
  let valueTotal = total > 0 ? total : ""
  document.querySelector("#total").value = valueTotal
}

reset.addEventListener("click", () => {
  resetFn()
  reset.disabled = true
  hitung.disabled = true
})
hitung.addEventListener("click", () => {
  countFn()
})

reset.disabled = true
hitung.disabled = true
