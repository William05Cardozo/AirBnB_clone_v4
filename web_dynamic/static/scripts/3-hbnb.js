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

        url: 'http://localhost:5001/api/v1/status/',
        success: function (data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }
    });

    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search',
        type: 'POST',
        contentType: 'application/json',
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                let place = data[i];
                $('.places ').append(
                    "<article>
                    <div class="title_box">
                    <h2> ${ place.name } </h2>
                    <div class="price_by_night">$ { place.price_by_night }</div>
                    </div>
                    <div class="information">
                    <div class="max_guest">${ place.max_guest } ${ place.max_guest } !== 1 ? 'Guests' : 'Guest'</div>
                    <div class="number_rooms">${ place.number_rooms }  ${place.number_rooms } !== 1 ? 'Bedrooms' : 'Bedroom'</div>
                    <div class="number_bathrooms">${place.number_rooms} ${place.number_rooms } !== 1 ? 'Bedrooms' : 'Bedroom'</div>
                    </div>
                    <div class="user">
                    <b>Owner:</b> ${ place.user.first_name } ${ place.user.last_name }
                    </div>
                    <div class="description">$ { place.description }</div>
                    </article>
                );
            }
        }});
});
