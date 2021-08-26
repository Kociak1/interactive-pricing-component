
const elements = [
    {
        text: '10K pageviews',
        price:8
    },
    {
        text: '50K pageviews',
        price:12
    },
    {
        text: '100K pageviews',
        price:16
    },
    {
        text: '500k pageviews',
        price:24
    },
    {
        text: '1M pageviews',
        price:36
    }
]
const slider = document.querySelector('#slider')
const discount = document.querySelector('#discount')
const price = document.querySelector('h4 span')
const val = document.querySelector('.page')

slider.addEventListener('change', () => {
    const Price = elements[slider.value].price
    val.textContent = elements[slider.value].text
    price.textContent = (discount.checked ? `$${Price * 0.75}.00` : `$${Price}.00`)
})

discount.addEventListener('click', () => {
    const Price = elements[slider.value].price
    val.textContent = elements[slider.value].text
    price.textContent = (discount.checked ? `$${Price * 0.75}.00` : `$${Price}.00`)
})