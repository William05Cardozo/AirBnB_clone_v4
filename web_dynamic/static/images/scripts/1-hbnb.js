let dict_amenities = {};
$(document).ready(function () {
    //let dict_amenities = {};
    $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
        dict_amenities[$(this).data('name')] = $(this).data('id');
    }
    else {
        delete dict_amenities[$(this).data('name')];
        }
    $(".amenities > h4").text(Object.keys(dict_amenities).join(', '))

    });
});
