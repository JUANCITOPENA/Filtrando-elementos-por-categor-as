$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

//Modal para ver los detalles:
$(document).ready(function() {
    // Abre el modal cuando se hace clic en un enlace o nombre de producto
    $('.product-item a').click(function() {
        // Obtén los detalles del producto (imagen, nombre, descripción, precio, stock)
        var productImage = $(this).siblings('img').attr('src');
        var productName = $(this).text();
        var productDescription = "Descripción del producto."; // Aquí debes obtener la descripción correcta
        var productPrice = "$XX.XX";
        var productStock = "XX unidades";

        // Rellena el modal con los detalles del producto
        $('#productModal img').attr('src', productImage);
        $('#productModal h2').text(productName);
        $('#productModal p:nth-child(2)').text(productDescription);
        $('#productModal p:nth-child(3)').text("Precio: " + productPrice);
        $('#productModal #stock').text("Stock disponible: " + productStock);

        // Muestra el modal
        $('#productModal').css('display', 'block');
    });

    // Cierra el modal cuando se hace clic en el botón de cierre
    $('.close').click(function() {
        $('#productModal').css('display', 'none');
    });

    // Cierra el modal cuando se hace clic fuera del contenido modal
    $(window).click(function(event) {
        if (event.target == $('#productModal')[0]) {
            $('#productModal').css('display', 'none');
        }
    });
});


$(document).ready(function() {
  const carousel = $('.carousel');
  const prevButton = $('.prev-button');
  const nextButton = $('.next-button');

  let currentIndex = 0;

  // Manejar el clic en el botón "Siguiente"
  nextButton.click(function() {
    currentIndex++;
    if (currentIndex > 2) { // Ajusta este valor según la cantidad de elementos por carrusel
      currentIndex = 0;
    }
    updateCarousel();
  });

  // Manejar el clic en el botón "Anterior"
  prevButton.click(function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 2; // Ajusta este valor según la cantidad de elementos por carrusel
    }
    updateCarousel();
  });

  function updateCarousel() {
    const itemWidth = $('.product-item').outerWidth();
    const translateX = -currentIndex * itemWidth;
    carousel.css('transform', `translateX(${translateX}px)`);
  }
});
