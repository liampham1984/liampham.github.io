(function($){
  $(document).ready(function() {
    $("#form").submit(function(event) {
      event.preventDefault();
      const form = $(this);
      const prodNumber = form.find('#prodNumber');
      const prodName = form.find('#prodName');
      const prodPrice = form.find('#prodPrice');
      const quantity = form.find('#quantity');
      const supplier = form.find('#supplier');
      const dateSupplied = form.find('#dateSupplied');

      const result = $('#result');
      result.val(`
        Product Number: ${prodNumber.val()}
        Product Name: ${prodName.val()}
        Price: ${prodPrice.val()}
        Quantity: ${quantity.val()}
        Supplier: ${supplier.val()}
        Date supplied: ${dateSupplied.val()}
      `)
    });
    $('#reset').click(function() {
      const form = $('#form');
      const prodNumber = form.find('#prodNumber');
      const prodName = form.find('#prodName');
      const prodPrice = form.find('#prodPrice');
      const quantity = form.find('#quantity');
      const supplier = form.find('#supplier');
      const dateSupplied = form.find('#dateSupplied');

      prodNumber.val('');
      prodName.val('');
      prodPrice.val('0.0');
      quantity.val('0');
      supplier.val('');
      dateSupplied.val('');
    })
  });
})(jQuery);