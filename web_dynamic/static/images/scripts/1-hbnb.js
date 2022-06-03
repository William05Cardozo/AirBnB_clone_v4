$(document).ready(function () {
        let dict_amenities = {};
        $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            dict_amenities[$(this).data('id')] = $(this).data('name');
        }
        else {
            delete dict_amenities[$(this).data('id')];
        }
        $(".amenities > h4").text(dict_amenities[$(this).data('id')])

        });
    });
