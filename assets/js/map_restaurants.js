function initAutocomplete() {
    (function (A) {

        if (!Array.prototype.forEach)
            A.forEach = A.forEach || function (action, that) {
                for (var i = 0, l = this.length; i < l; i++)
                    if (i in this)
                        action.call(that, this[i], i, this);
            };

    })(Array.prototype);

    var
        mapObject,
        markers = [],
        markersData = {
            'Marker': [
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.865633,
                    location_longitude: 2.321236,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'tourism'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.854183,
                    location_longitude: 2.354808,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'tourism'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.863893,
                    location_longitude: 2.342348,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'health'

                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.860642,
                    location_longitude: 2.352245,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'health'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.858370,
                    location_longitude: 2.294481,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'education'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.837273,
                    location_longitude: 2.335387,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'education'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.860819,
                    location_longitude: 2.354507,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'business'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.853798,
                    location_longitude: 2.333328,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'business'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.862880,
                    location_longitude: 2.287205,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'business'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.865784,
                    location_longitude: 2.307314,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'health'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.852729,
                    location_longitude: 2.350564,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'health'
                },
                {
                    type_point: 'هذا النص نص تجريبي مختصر عن تفاصيل الاعلان...',
                    name: 'اسم المطعم',
                    location_latitude: 48.870587,
                    location_longitude: 2.318943,
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'advertising-details.php',
                    category: 'education'
                }
            ]

        };

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(48.865633, 2.321236),

        mapTypeControl: true,
        mapTypeControlOptions: {
            // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            // mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP],
            // position: google.maps.ControlPosition.LEFT_CENTER
        },

        // mapTypeId: google.maps.MapTypeId.HYBRID,
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scrollwheel: false,
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
    };
    var marker;
    mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (var key in markersData)

        filterMarkers = function (category) {
            markersData[key].forEach(function (item) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
                    map: mapObject,
                    // mapTypeId: 'satellite',
                    icon: 'assets/images/pins/marker1.png',
                    // visible: false
                });

                console.log(category);
                if (item.category === category || category === 0) {
                    marker.setMap(mapObject);
                }


                // Categories don't match
                else {
                    marker.setMap(null);
                }

                // console.log(item.category);

                // If is same category or category not picked


                if ('undefined' === typeof markers[key])
                    markers[key] = [];
                markers[key].push(marker);
                google.maps.event.addListener(marker, 'click', (function () {
                    closeInfoBox();
                    getInfoBox(item).open(mapObject, this);
                    mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
                }));
                // clearMarkers = function () {
                //     marker.setMap(null);
                //     console.log(item)
                // };

            });

        };
    filterMarkers(0);
    var MyLocation = document.getElementById('myLocation');
    mapObject.controls[google.maps.ControlPosition.TOP_RIGHT].push(MyLocation);
    geolocate = function geolocate() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                // Create a marker and center map on user location
                marker.setMap(null);
                marker = new google.maps.Marker({
                    position: pos,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    icon: 'assets/images/pins/marker.png',
                    map: mapObject,

                });
                mapObject.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                mapObject.setZoom(16);
            });
        }
    };

    hideAllMarkers = function hideAllMarkers() {
        for (var key in markers)
            markers[key].forEach(function (marker) {
                marker.setMap(null);
            });
    };
    ShowAllMarkers = function hideAllMarkers() {
        for (var key in markers)
            markers[key].forEach(function (marker) {
                marker.setMap(mapObject);
            });
    };
    function closeInfoBox() {
        $('div.infoBox').remove();
    }
    closeBox = function () {
        $('div.infoBox').remove();
    } ;

    function getInfoBox(item) {
        return new InfoBox({
            content:
                '<div class="marker_info" id="marker_info">' +
                '<span>' +
                '<h3>' + item.name_point + '</h3>' +
                '<em>' + item.type_point + '</em>' +
                '<strong>' + item.description_point + '</strong>' +
                '<a href="' + item.url_point + '" class="btn_infobox_detail"><i class="fa fa-link"></i>	</a>' +
                '<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="' + item.get_directions_start_address + '" type="hidden"><input type="hidden" name="daddr" value="' + item.location_latitude + ',' + item.location_longitude + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">الموقع على الخرائط <i class="far fa-compass"></i> </button></form>' +
                '</span>' +
                '</div>',
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(11, 40),
            closeBoxMargin: '',
            closeBoxURL: "assets/images/close_infobox.png",
            isHidden: false,
            alignBottom: true,
            pane: 'floatPane',
            enableEventPropagation: true
        });


    }

}
