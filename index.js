const showMore = document.querySelector('.show-more')
const ul = document.getElementById('u')

async function getProducts() {
	const response = await fetch('https://api.escuelajs.co/api/v1/products')
	const result = await response.json()
	console.log(result)
	const lengthC = result.length;
	console.log(lengthC)
	let visibleItemsCount = 10

	const renderProducts = () => {
		ul.innerHTML = '';
		result.forEach((item, index) => {
			const ndiv = document.createElement('div')
			ndiv.className = 'prod-grid-item';
			ndiv.innerHTML = `
        <img src="https://i.pinimg.com/originals/1d/20/cc/1d20cc090b067741b180da966f650f20.jpg" alt="title" class="imgb">
        <p class="pp">$${item.price}</p>
        <h3 class="hp">${item.title}</h3>
      `

			if (index < visibleItemsCount) {
				ndiv.classList.add('visible')
			} else {
				ndiv.classList.add('no-visible')
			}

			ul.appendChild(ndiv)
		})
	}

	renderProducts()

	showMore.addEventListener('click', () => {
		if (visibleItemsCount >= lengthC) {
			visibleItemsCount = 10
		} else {
			visibleItemsCount += 10
		}

		if (visibleItemsCount >= lengthC) {
			showMore.innerText = 'Скрыть'
		} else {
			showMore.innerText = 'Показать еще'
		}

		renderProducts()
	})
}

async function getCategories() {
	const response = await fetch('https://api.escuelajs.co/api/v1/categories')
	const result = await response.json()
	console.log(result)
	const lengthC = result.length
	console.log(lengthC)
	let visibleItemsCount = 10

	const renderProducts = () => {
		ul.innerHTML = ''
		result.forEach((item, index) => {
			const ndiv = document.createElement('div')
			ndiv.className = 'prod-grid-item'
			ndiv.innerHTML = `
        <img src="https://sun9-34.userapi.com/impf/QASR6vnn9sGQcNHKdW3FGIOcnoj8smXojlnfrw/OT_lzmkaZk0.jpg?size=1920x768&quality=95&crop=0,0,1671,668&sign=267299968e692ceb7b6e41d224d7f9e3&type=cover_group" alt="title" class="imgb">
        <h3 class="hp">${item.name}</h3>
      `

			if (index < visibleItemsCount) {
				ndiv.classList.add('visible')
			} else {
				ndiv.classList.add('no-visible')
			}

			ul.appendChild(ndiv)
		})
	}

	renderProducts()

	showMore.addEventListener('click', () => {
		if (visibleItemsCount >= lengthC) {
			visibleItemsCount = 10
		} else {
			visibleItemsCount += 10
		}

		if (visibleItemsCount >= lengthC) {
			showMore.innerText = 'Скрыть'
		} else {
			showMore.innerText = 'Показать еще'
		}

		renderProducts()
	})
}

async function getUsers() {
	const response = await fetch('https://api.escuelajs.co/api/v1/users')
	const result = await response.json()
	console.log(result)
	const lengthC = result.length
	console.log(lengthC)
	let visibleItemsCount = 10

	const renderProducts = () => {
		ul.innerHTML = ''
		result.forEach((item, index) => {
			const ndiv = document.createElement('div')
			ndiv.className = 'prod-grid-item'
			ndiv.innerHTML = `
        <img src="https://mikhprim.gosuslugi.ru/netcat_files/9/261/_tJGuD2xn1cSnqRNprESr0Cxm7_J3Vz5C6omyufe5RNE_lYtxVi1bsNtaxpSmIJw8Jbj6qZMbGBqUiKTXcU5_ejN_0.jpg" alt="title" class="imgb">
        <p class="pp">${item.name}</p>
        <h3 class="hp">${item.email}</h3>
      `

			if (index < visibleItemsCount) {
				ndiv.classList.add('visible')
			} else {
				ndiv.classList.add('no-visible')
			}

			ul.appendChild(ndiv)
		})
	}

	renderProducts()

	showMore.addEventListener('click', () => {
		if (visibleItemsCount >= lengthC) {
			visibleItemsCount = 10
		} else {
			visibleItemsCount += 10
		}

		if (visibleItemsCount >= lengthC) {
			showMore.innerText = 'Скрыть'
		} else {
			showMore.innerText = 'Показать еще'
		}

		renderProducts()
	})
}

getProducts()
