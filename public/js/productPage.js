const buyProductModal = new bootstrap.Modal(document.getElementById('buyProductModal'));


function addToCart(product) {
	console.log(product);

	let finalPrice = product.price - product.discount;

	const extraAccumulator = document.getElementById('extraAccumulator').checked;
	const extraBlades = document.getElementById('extraBlades').checked;

	if (extraAccumulator) {
		finalPrice += 500;
	}

	if (extraBlades) {
		finalPrice += 150;
	}

	document.getElementById('finalPrice').innerText = `${finalPrice} рубликов`;
	buyProductModal.show();
	

}

	function closeModal() {
		buyProductModal.hide();
	}

function sendPurchaseRequest(product) {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;

	if (!name || !email || !phone) {
		alert('Fill all the gaps please')
		return;
	}

	const extraAccumulator = document.getElementById('extraAccumulator').checked;
	const extraBlades = document.getElementById('extraBlades').checked;


	axios.post (
		'/api/createPurchaseRequest',
		{
			name,
			email,
			phone,
			productId: product.id,
			extraAccumulator,
			extraBlades
		}
	)
	.then(response => {
		alert('Сасибо за покупку, в ближайшее время мы свяжемся с вами');
		closeModal();
	})
	.catch(err => {
		console.error(err);
	})
}