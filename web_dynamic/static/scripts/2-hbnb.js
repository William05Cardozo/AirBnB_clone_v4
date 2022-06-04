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
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        success: function (data) {
            if (data.status === 'OK'){
                $('#api_status').addClass('available');
            } else {
                $('#api_status').addClass('available');
            }
        }
    });
});
