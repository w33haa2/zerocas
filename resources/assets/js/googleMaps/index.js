import * as $ from 'jquery';
import loadGoogleMapsAPI from 'load-google-maps-api';
import * as Highcharts from 'highcharts';
import swal from 'sweetalert';
import NoDataToDisplay from 'highcharts-no-data-to-display';
export default (function () {
    if ($('#google-map').length > 0) {
        loadGoogleMapsAPI({
            key: 'AIzaSyA6GAFJCD33_cER5b5QyZ-mcumxpU4cm9A',
        }).then(() => {
            const latitude = 7.280318;
            const longitude = 125.258767;
            const mapZoom = 9;
            const {
                google
            } = window;
            const mapOptions = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: mapZoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                styles: [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ],
            };
            const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

            var counter = 0;
            var markers = [];
            var setID = [];
            var lastlevel;

            function CenterControl(controlDiv, map) {

                // Set CSS for the control border.
                var controlUI = document.createElement('div');
                controlUI.style.backgroundColor = '#fff';
                controlUI.style.border = '2px solid #fff';
                controlUI.style.borderRadius = '3px';
                controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlUI.style.cursor = 'pointer';
                controlUI.style.marginBottom = '22px';
                controlUI.style.marginTop = '10px';
                controlUI.style.marginLeft = '10px';
                controlUI.style.textAlign = 'center';
                controlUI.title = 'Click to see only rain sensors';
                controlDiv.appendChild(controlUI);

                // Set CSS for the control interior.
                var controlText = document.createElement('div');
                controlText.style.color = 'rgb(25,25,25)';
                controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText.style.fontSize = '16px';
                controlText.style.lineHeight = '38px';
                controlText.style.paddingLeft = '5px';
                controlText.style.paddingRight = '5px';
                controlText.innerHTML = 'Rainfall';
                controlUI.appendChild(controlText);


                // Setup the click event listeners: simply set the map to Chicago.
                controlUI.addEventListener('click', function () {
                    for (var k = 0; k < markers.length; k++) {
                        if (markers[k].senstype != "Rain2") {

                            markers[k].setVisible(false);

                        }
                        if (markers[k].senstype == "Rain2") {

                            markers[k].setVisible(true);

                        }


                    }
                });

            }

            function CenterControl1(controlDiv1, map) {
                // Set CSS for the control border.
                var controlUI1 = document.createElement('div');
                controlUI1.style.backgroundColor = '#fff';
                controlUI1.style.border = '2px solid #fff';
                controlUI1.style.borderRadius = '3px';
                controlUI1.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlUI1.style.cursor = 'pointer';
                controlUI1.style.marginBottom = '22px';
                controlUI1.style.marginTop = '10px';
                controlUI1.style.marginLeft = '10px';
                controlUI1.style.textAlign = 'center';
                controlUI1.title = 'Click to see only waterlevel sensors';
                controlDiv1.appendChild(controlUI1);

                // Set CSS for the control interior.
                var controlText1 = document.createElement('div');
                controlText1.style.color = 'rgb(25,25,25)';
                controlText1.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText1.style.fontSize = '16px';
                controlText1.style.lineHeight = '38px';
                controlText1.style.paddingLeft = '5px';
                controlText1.style.paddingRight = '5px';
                controlText1.innerHTML = 'Waterlevel';
                controlUI1.appendChild(controlText1);

                controlUI1.addEventListener('click', function () {
                    for (var k = 0; k < markers.length; k++) {
                        if (markers[k].senstype != "Waterlevel") {
                            markers[k].setVisible(false);
                        }
                        if (markers[k].senstype == "Waterlevel") {
                            markers[k].setVisible(true);
                        }

                    }
                });
            }

            function CenterControl2(controlDiv2, map) {
                // Set CSS for the control border.
                var controlUI2 = document.createElement('div');
                controlUI2.style.backgroundColor = '#fff';
                controlUI2.style.border = '2px solid #fff';
                controlUI2.style.borderRadius = '3px';
                controlUI2.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlUI2.style.cursor = 'pointer';
                controlUI2.style.marginBottom = '22px';
                controlUI2.style.marginTop = '10px';
                controlUI2.style.marginLeft = '10px';
                controlUI2.style.textAlign = 'center';
                controlUI2.title = 'Click to see only waterlevel sensors';
                controlDiv2.appendChild(controlUI2);

                // Set CSS for the control interior.
                var controlText2 = document.createElement('div');
                controlText2.style.color = 'rgb(25,25,25)';
                controlText2.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText2.style.fontSize = '16px';
                controlText2.style.lineHeight = '38px';
                controlText2.style.paddingLeft = '5px';
                controlText2.style.paddingRight = '5px';
                controlText2.innerHTML = 'Tandem';
                controlUI2.appendChild(controlText2);

                controlUI1.addEventListener('click', function () {
                    for (var k = 0; k < markers.length; k++) {
                        if (markers[k].senstype != "Waterlevel & Rain 2") {
                            markers[k].setVisible(false);
                        }
                        if (markers[k].senstype == "Waterlevel & Rain 2") {
                            markers[k].setVisible(true);
                        }

                    }
                });
            }

            function CenterControl2(controlDiv2, map) {
                // Set CSS for the control border.
                var controlUI2 = document.createElement('div');
                controlUI2.style.backgroundColor = '#fff';
                controlUI2.style.border = '2px solid #fff';
                controlUI2.style.borderRadius = '3px';
                controlUI2.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlUI2.style.cursor = 'pointer';
                controlUI2.style.marginBottom = '22px';
                controlUI2.style.marginTop = '10px';
                controlUI2.style.marginLeft = '10px';
                controlUI2.style.textAlign = 'center';
                controlUI2.title = 'Click to see only waterlevel sensors';
                controlDiv2.appendChild(controlUI2);

                // Set CSS for the control interior.
                var controlText2 = document.createElement('div');
                controlText2.style.color = 'rgb(25,25,25)';
                controlText2.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText2.style.fontSize = '16px';
                controlText2.style.lineHeight = '38px';
                controlText2.style.paddingLeft = '5px';
                controlText2.style.paddingRight = '5px';
                controlText2.innerHTML = 'Tandem';
                controlUI2.appendChild(controlText2);

                controlUI2.addEventListener('click', function () {
                    for (var k = 0; k < markers.length; k++) {
                        if (markers[k].senstype != "Waterlevel & Rain 2") {
                            markers[k].setVisible(false);
                        }
                        if (markers[k].senstype == "Waterlevel & Rain 2") {
                            markers[k].setVisible(true);
                        }

                    }
                });
            }

            function CenterControl3(controlDiv3, map) {
                // Set CSS for the control border.
                var controlUI3 = document.createElement('div');
                controlUI3.style.backgroundColor = '#fff';
                controlUI3.style.border = '2px solid #fff';
                controlUI3.style.borderRadius = '3px';
                controlUI3.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlUI3.style.cursor = 'pointer';
                controlUI3.style.marginBottom = '22px';
                controlUI3.style.marginTop = '10px';
                controlUI3.style.marginLeft = '10px';
                controlUI3.style.textAlign = 'center';
                controlUI3.title = 'Click to see only waterlevel sensors';
                controlDiv3.appendChild(controlUI3);

                // Set CSS for the control interior.
                var controlText3 = document.createElement('div');
                controlText3.style.color = 'rgb(25,25,25)';
                controlText3.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText3.style.fontSize = '16px';
                controlText3.style.lineHeight = '38px';
                controlText3.style.paddingLeft = '5px';
                controlText3.style.paddingRight = '5px';
                controlText3.innerHTML = 'All';
                controlUI3.appendChild(controlText3);

                controlUI3.addEventListener('click', function () {
                    for (var k = 0; k < markers.length; k++) {


                        markers[k].setVisible(true);


                    }
                });
            }
            var centerControlDiv = document.createElement('div');
            var centerControl = new CenterControl(centerControlDiv, map);
            centerControlDiv.index = 1;
            var centerControlDiv1 = document.createElement('div');
            var centerControl1 = new CenterControl1(centerControlDiv1, map);
            centerControlDiv1.index = 1;
            var centerControlDiv2 = document.createElement('div');
            var centerControl2 = new CenterControl2(centerControlDiv2, map);
            centerControlDiv2.index = 1;
            var centerControlDiv3 = document.createElement('div');
            var centerControl3 = new CenterControl3(centerControlDiv3, map);
            centerControlDiv3.index = 1;
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv1);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv2);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv3);
            $(document).ready(function () {
                setInterval(setrefresh, 300000);
                $("#watahfol").on("click", function () {
                    if ($("#container2").hasClass("show"))
                        $("#container1").addClass("show");
                    $("container2").removeClass("show");
                });
                $("#rainfol").on("click", function () {
                    if ($("#container1").hasClass("show"))
                        $("#container2").addClass("show");
                    $("container1").removeClass("show");
                });
                $.ajax({
                    method: 'get',
                    url: "/coord",
                    dataType: 'json',
                    success: function (data1) {
                        console.log(data1)
                        var x = 0;
                        var infowindow = new google.maps.InfoWindow({
                            content: ''
                        });


                        var data_length = data1.length;
                        $('#countsensor span').text(data_length);
                        console.log(data_length);
                        var i = 0;
                        var q = [];
                        var len = 0;
                        for (i = 0, len = data_length; i < len; i++) {
                            if (data1[i].sensor_name != "DEWS Alerting") {
                                if (data1[i].sensor_name == "Waterlevel") {
                                    setID.push(data1[i].dev_id);
                                    var janreypogi = data1[i].dev_id;
                                    var sensor = data1[i].sensor_name;
                                    var loc = data1[i].location;
                                    var marker = new google.maps.Marker({
                                        map,
                                        position: new google.maps.LatLng(data1[i].latitude, data1[i].longitude),
                                        icon: 'assets/images/finalwaterlevel.png',
                                        visible: true,
                                        sensID: data1[i].dev_id,
                                        senstype: data1[i].sensor_name,
                                        markerThreshold: 0,
                                    });
                                    bindInfoWindow(marker, loc, map, sensor, janreypogi, infowindow, "<br>" + "<p>" + data1[i].location + ", " + data1[i].province + "</p>" + "<p>" + "Installed Sensors: " + data1[i].sensor_name + "</p>" + "<p>" + "Date Installed: " + data1[i].date_installed + "</p>");
                                    markers.push(marker);
                                }
                                if (data1[i].sensor_name == "Waterlevel & Rain 2") {
                                    setID.push(data1[i].dev_id);
                                    var janreypogi = data1[i].dev_id;
                                    var sensor = data1[i].sensor_name;
                                    var loc = data1[i].location;
                                    var marker = new google.maps.Marker({
                                        map,
                                        position: new google.maps.LatLng(data1[i].latitude, data1[i].longitude),
                                        icon: 'assets/images/tandemnorain.png',
                                        visible: true,
                                        sensID: data1[i].dev_id,
                                        senstype: data1[i].sensor_name,

                                    });
                                    bindInfoWindow(marker, loc, map, sensor, janreypogi, infowindow, "<br>" + "<p>" + data1[i].location + ", " + data1[i].province + "</p>" + "<p>" + "Installed Sensors: " + data1[i].sensor_name + "</p>" + "<p>" + "Date Installed: " + data1[i].date_installed + "</p>");
                                    markers.push(marker);
                                }
                                if (data1[i].sensor_name == "Rain2") {
                                    setID.push(data1[i].dev_id);
                                    var janreypogi = data1[i].dev_id;
                                    var sensor = data1[i].sensor_name;
                                    var loc = data1[i].location;
                                    var marker = new google.maps.Marker({
                                        map,
                                        position: new google.maps.LatLng(data1[i].latitude, data1[i].longitude),
                                        icon: 'assets/images/finaliconnorain.png',
                                        visible: true,
                                        sensID: data1[i].dev_id,
                                        senstype: data1[i].sensor_name,

                                    });
                                    bindInfoWindow(marker, loc, map, sensor, janreypogi, infowindow, "<br>" + "<p>" + data1[i].location + ", " + data1[i].province + "</p>" + "<p>" + "Installed Sensors: " + data1[i].sensor_name + "</p>" + "<p>" + "Date Installed: " + data1[i].date_installed + "</p>");
                                    markers.push(marker);
                                }

                            }
                            if (i == data_length - 1) {
                                // setrefresh1();
                                setTimeout(function () {
                                    setrefresh1();
                                }, 15000);

                            }

                        }

                        function bindInfoWindow(marker, loc, map, sensor, janreypogi, infowindow, html) {
                            google.maps.event.addListener(marker, 'mouseover', function () {
                                infowindow.setContent(html);
                                infowindow.open(map, marker);
                            });
                            google.maps.event.addListener(marker, 'click', function () {
                                if (sensor == "Rain2") {
                                    $.ajax({
                                        method: 'get',
                                        url: "/getAPI?id=" + janreypogi,
                                        dataType: 'json',
                                        success: function (datani) {
                                            var a = datani.data.length;
                                            var x = [];
                                            var c = [];
                                            while (a > 0) {
                                                var ts = new Date(datani.data[a - 1].dateTimeRead);
                                                x.push(ts.toDateString() + " " + ts.toLocaleTimeString());
                                                c.push(datani.data[a - 1].rain_value);
                                                a--;
                                            }
                                            var t = c.map(Number);
                                            if (datani.data.length != 0) {
                                                $('#chartModal').modal('show');
                                                Highcharts.chart('container', {
                                                    chart: {
                                                        plotAreaWidth: 1000,
                                                        plotAreaHeight: 900,
                                                    },
                                                    function (chart) { // on complete
                                                        if (chart.series.length < 1) { // check series is empty
                                                            chart.renderer.text('No Data Available', 140, 120)
                                                                .css({
                                                                    color: '#4572A7',
                                                                    fontSize: '16px'
                                                                })
                                                                .add();
                                                        }
                                                    },
                                                    title: {
                                                        text: loc
                                                    },
                                                    subtitle: {
                                                        text: 'Rainfall in the last 24 Hours (Source: DOST-ASTI API)'
                                                    },

                                                    yAxis: {
                                                        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', "11", "12", "13", "14", "15"],

                                                        max: 15,
                                                        min: 0,
                                                        tickmarkPlacement: 'on',
                                                        title: {
                                                            text: 'Rainfall in millimeter(mm)'
                                                        }

                                                    },
                                                    xAxis: {
                                                        categories: x,
                                                        labels: {
                                                            enabled: false
                                                        }
                                                    },
                                                    legend: {
                                                        layout: 'vertical',
                                                        align: 'right',
                                                        verticalAlign: 'middle'
                                                    },
                                                    boost: {
                                                        useGPUTranslations: true
                                                    },
                                                    series: [{
                                                        "name": "Precipitation Value",
                                                        boostThreshold: 1,
                                                        "data": t
                                                    }],
                                                    lang: {
                                                        noData: "No Data to Display"
                                                    },
                                                    noData: {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '15px',
                                                            color: '#303030'
                                                        }
                                                    },
                                                    plotOptions: {
                                                        series: {
                                                            label: {
                                                                connectorAllowed: false
                                                            },
                                                            color: '#4F7942'

                                                        }
                                                    },
                                                    responsive: {
                                                        rules: [{
                                                            condition: {
                                                                maxWidth: 1000
                                                            },
                                                            chartOptions: {
                                                                legend: {
                                                                    layout: 'horizontal',
                                                                    align: 'center',
                                                                    verticalAlign: 'bottom'
                                                                }
                                                            }
                                                        }]
                                                    }
                                                });
                                            } else {
                                                swal("Oops", "Something went wrong! The sensor has no data.", "error");
                                            }
                                        },
                                        error: function (data, textStatus, errorThrown, error) {},
                                    });
                                }
                                if (sensor == "Waterlevel & Rain 2") {
                                    $.ajax({
                                        method: 'get',
                                        url: "/getAPI?id=" + janreypogi,
                                        dataType: 'json',
                                        success: function (datani) {
                                            var a = datani.data.length;
                                            var x = [];
                                            var c = [];
                                            var z = [];
                                            while (a > 0) {
                                                var ts = new Date(datani.data[a - 1].dateTimeRead);
                                                x.push(ts.toDateString() + " " + ts.toLocaleTimeString());
                                                c.push(datani.data[a - 1].waterlevel / 100);
                                                z.push(datani.data[a - 1].rain_value);
                                                a--;
                                            }
                                            var t = c.map(Number);
                                            var q = z.map(Number);
                                            if (datani.data.length != 0) {
                                                $('#chartwaterfallModal').modal('show');
                                                Highcharts.chart('container1', {
                                                    chart: {
                                                        plotAreaWidth: 1000,
                                                        plotAreaHeight: 900,
                                                    },
                                                    function (chart) { // on complete
                                                        if (chart.series.length < 1) { // check series is empty
                                                            chart.renderer.text('No Data Available', 140, 120)
                                                                .css({
                                                                    color: '#4572A7',
                                                                    fontSize: '16px'
                                                                })
                                                                .add();
                                                        }
                                                    },
                                                    title: {
                                                        text: loc
                                                    },

                                                    subtitle: {
                                                        text: 'Waterlevel in the last 24 hours (Source: DOST-ASTI API)'
                                                    },

                                                    yAxis: {
                                                        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', "11", "12", "13", "14", "15"],

                                                        min: 0,
                                                        max: 15,
                                                        tickmarkPlacement: 'on',
                                                        title: {
                                                            text: 'Waterlevel in Meter (m)'
                                                        }
                                                    },
                                                    xAxis: {
                                                        categories: x,
                                                        labels: {
                                                            enabled: false
                                                        }
                                                    },
                                                    legend: {
                                                        layout: 'vertical',
                                                        align: 'right',
                                                        verticalAlign: 'middle'
                                                    },
                                                    boost: {
                                                        useGPUTranslations: true
                                                    },
                                                    series: [{
                                                        "name": "Waterfall Level",
                                                        boostThreshold: 1,
                                                        "data": t,

                                                    }],
                                                    lang: {
                                                        noData: "No Data to Display"
                                                    },

                                                    noData: {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '15px',
                                                            color: '#303030'
                                                        }
                                                    },
                                                    plotOptions: {
                                                        series: {
                                                            label: {
                                                                connectorAllowed: false
                                                            },
                                                            color: '#0080FF',

                                                        }
                                                    },
                                                    responsive: {
                                                        rules: [{
                                                            condition: {
                                                                maxWidth: 1000
                                                            },
                                                            chartOptions: {
                                                                legend: {
                                                                    layout: 'horizontal',
                                                                    align: 'center',
                                                                    verticalAlign: 'bottom'
                                                                }
                                                            }
                                                        }]
                                                    }
                                                });
                                                Highcharts.chart('container2', {
                                                    chart: {
                                                        plotAreaWidth: 900,
                                                        plotAreaHeight: 800,
                                                    },
                                                    function (chart) { // on complete
                                                        if (chart.series.length == 0) { // check series is empty
                                                            chart.renderer.text('No Data Available', 140, 120)
                                                                .css({
                                                                    color: '#4572A7',
                                                                    fontSize: '16px'
                                                                })
                                                                .add();
                                                        }
                                                    },
                                                    title: {
                                                        text: loc
                                                    },
                                                    subtitle: {
                                                        text: 'Rainfall in the last 24 hours (Source: DOST-ASTI API)'
                                                    },
                                                    yAxis: {
                                                        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', "11", "12", "13", "14", "15"],

                                                        max: 15,
                                                        min: 0,
                                                        tickmarkPlacement: 'on',
                                                        title: {
                                                            text: 'Rainfall in millimeter(mm)'
                                                        }
                                                    },
                                                    xAxis: {
                                                        categories: x,
                                                        labels: {
                                                            enabled: false
                                                        }
                                                    },
                                                    legend: {
                                                        layout: 'vertical',
                                                        align: 'right',
                                                        verticalAlign: 'middle'
                                                    },

                                                    boost: {
                                                        useGPUTranslations: true
                                                    },
                                                    series: [{
                                                        "name": "Precipitation Value",
                                                        boostThreshold: 1,
                                                        "data": q
                                                    }],
                                                    lang: {
                                                        noData: "No Data to Display"
                                                    },
                                                    noData: {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '15px',
                                                            color: '#303030'
                                                        }
                                                    },
                                                    plotOptions: {
                                                        series: {
                                                            label: {
                                                                connectorAllowed: false
                                                            },
                                                            color: '#4F7942'

                                                        }
                                                    },
                                                    responsive: {
                                                        rules: [{
                                                            condition: {
                                                                maxWidth: 1000
                                                            },
                                                            chartOptions: {
                                                                legend: {
                                                                    layout: 'horizontal',
                                                                    align: 'center',
                                                                    verticalAlign: 'bottom'
                                                                }
                                                            }
                                                        }]
                                                    }
                                                });
                                            } else {
                                                swal("Oops", "Something went wrong! The sensor has no data.", "error");
                                            }

                                        },
                                        error: function (data, textStatus, errorThrown, error) {},

                                    });
                                }
                                if (sensor == "Waterlevel") {
                                    $.ajax({
                                        method: 'get',
                                        url: "/getAPI?id=" + janreypogi,
                                        dataType: 'json',
                                        success: function (datani) {
                                            var a = datani.data.length;
                                            var x = [];
                                            var c = [];
                                            while (a > 0) {
                                                var ts = new Date(datani.data[a - 1].dateTimeRead);
                                                x.push(ts.toDateString() + " " + ts.toLocaleTimeString());
                                                c.push(datani.data[a - 1].waterlevel / 100);
                                                a--;
                                            }
                                            var t = c.map(Number);

                                            if (datani.data.length != 0) {
                                                $('#chartwaterlevelModal').modal('show');
                                                Highcharts.chart('container23', {
                                                    chart: {
                                                        plotAreaWidth: 1000,
                                                        plotAreaHeight: 900,
                                                    },
                                                    function (chart) { // on complete
                                                        if (chart.series.length == 0) { // check series is empty
                                                            chart.renderer.text('No Data Available', 140, 120)
                                                                .css({
                                                                    color: '#4572A7',
                                                                    fontSize: '16px'
                                                                })
                                                                .add();
                                                        }
                                                    },
                                                    title: {
                                                        text: loc
                                                    },

                                                    subtitle: {
                                                        text: 'Waterlevel in the last 24 hours (Source: DOST-ASTI API)'
                                                    },

                                                    yAxis: {
                                                        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', "11", "12", "13", "14", "15"],

                                                        min: 0,
                                                        max: 15,
                                                        tickmarkPlacement: 'on',
                                                        title: {
                                                            text: 'Waterfall Level in Meter (m)'
                                                        }
                                                    },

                                                    xAxis: {
                                                        categories: x,
                                                        labels: {
                                                            enabled: false
                                                        }
                                                    },
                                                    legend: {
                                                        layout: 'vertical',
                                                        align: 'right',
                                                        verticalAlign: 'middle'
                                                    },

                                                    boost: {
                                                        useGPUTranslations: true
                                                    },

                                                    series: [{
                                                        "name": "Waterfall Level",
                                                        boostThreshold: 1,
                                                        "data": t
                                                    }],

                                                    lang: {
                                                        noData: "No Data to Display"
                                                    },

                                                    noData: {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '15px',
                                                            color: '#303030'
                                                        }
                                                    },
                                                    plotOptions: {
                                                        series: {
                                                            label: {
                                                                connectorAllowed: false
                                                            },
                                                            color: '#0080FF',
                                                            fillOpacity: 0.1
                                                        }
                                                    },
                                                    responsive: {
                                                        rules: [{
                                                            condition: {
                                                                maxWidth: 1000
                                                            },
                                                            chartOptions: {
                                                                legend: {
                                                                    layout: 'horizontal',
                                                                    align: 'center',
                                                                    verticalAlign: 'bottom'
                                                                }
                                                            }
                                                        }]
                                                    }
                                                });
                                            } else {
                                                swal("Oops", "Something went wrong! The sensor has no data.", "error");
                                            }

                                        },
                                        error: function (data, textStatus, errorThrown, error) {},
                                    });
                                }
                            });
                            google.maps.event.addListener(marker, 'mouseout', function () {
                                infowindow.close();
                            });
                        }
                    },
                    error: function (data, textStatus, errorThrown, error) {
                        // alert(error);
                        console.log('Error Message: ' + textStatus);
                        console.log('HTTP Error: ' + errorThrown);
                    }
                });
            });

            function setrefresh() {
                var x = 0;
                var c = 0;
                var watercounter = 0;
                var currentrain = 0;
                for (x = 0; x < setID.length; x++) {

                    $.ajax({
                        method: 'get',
                        url: "/getAPI?id=" + setID[x],
                        dataType: 'json',
                        success: function (datani) {
                            if (datani.data.length != 0) {

                                var t = datani.data[0].rain_value;
                                //console.log(t);
                                var e = 0;
                                for (var y = 0; y < 4; y++) {
                                    e = e + parseFloat(datani.data[y].rain_value);
                                }
                                var i = e / 4;
                                console.log(i)
                                var q = datani.type_id;
                                var date1 = datani.dateTimeRead;
                                if (i > 0.4) {
                                    $.ajax({
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                        },
                                        url: "/addlog",
                                        method: 'POST',
                                        dataType: 'text',
                                        data: {
                                            location: q,
                                            raindata: i,
                                            dateSent: date1
                                        },
                                        success: function (data) {
                                            console.log("test");
                                        },
                                        error: function (data) {
                                            console.log("test1");
                                        }
                                    });
                                }
                                for (var k = 0; k < markers.length; k++) {
                                    if (datani.dev_id == "Waterlevel") {
                                        if (i > markers[k].markerThreshold) {
                                            markers[k].setIcon('assets/images/finalwaterleveldanger.png');
                                            var temp = markers[k].markerThreshold * 0.20;
                                            if (i - markers[k].markerThreshold == temp) {
                                                watercounter++;
                                                $('#countcurrentwaterlevel span').text(watercounter);
                                                $.ajax({
                                                    headers: {
                                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                    },
                                                    url: "/addlog",
                                                    method: 'POST',
                                                    dataType: 'text',
                                                    data: {
                                                        location: q,
                                                        raindata: i
                                                    },
                                                    success: function (data) {
                                                        console.log("test");
                                                    },
                                                    error: function (data) {
                                                        console.log("test1");
                                                    }
                                                });
                                            }
                                        }
                                    }
                                    if (datani.dev_id != "Waterlevel") {
                                        if (markers[k].sensID == datani.dev_id) {
                                            if (i == 0) {
                                                if (datani.type_id == "Rain2") {
                                                    markers[k].setIcon('assets/images/finaliconnorain.png');
                                                }
                                                if (datani.type_id == "Waterlevel & Rain 2") {
                                                    markers[k].setIcon('assets/images/tandemnorain.png');
                                                }

                                            }

                                            if (i < 0.5 && i!=0 ) {
                                                if (t == 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconnorain.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/tandemnorain.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                }
                                                if (t > 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconnoraincurrent.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/tandemnoraincurrent.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                }
                                            }

                                            if (i > 0.5 && i < 2.5) {
                                                if (t == 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconaccumulatedmoderate.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/noraintandemmoderate.png');
                                                        c++;

                                                        $('#countaccumulated span').text(c);

                                                    }
                                                }
                                                if (t > 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconmoderate.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/curraintandemmoderate.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                }
                                            }
                                            if (i > 2.5 && i <= 7.50) {
                                                if (t == 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconaccumulatedintense.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/noraintandemintense.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                }
                                                if (t > 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconcurrentrainintense.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/curraintandemintense.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                }
                                            }
                                            if (i > 7.5) {
                                                if (t == 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconaccumulatedheavy.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/noraintandemheavy.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                    }
                                                }
                                                if (t > 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconcurrentraintorrential.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/curraintandemtorrential.png');
                                                        c++;
                                                        $('#countaccumulated span').text(c);
                                                        currentrain++;
                                                        $('#countcurrent span').text(currentrain);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                for (var k = 0; k < markers.length; k++) {
                                    if (datani.type_id == "Rain2") {
                                        if (markers[k].sensID == datani.dev_id) {
                                            markers[k].setIcon('assets/images/finaliconnorain.png');
                                        }
                                    }
                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                        if (markers[k].sensID == datani.dev_id) {
                                            markers[k].setIcon('assets/images/tandemnorain.png');
                                        }
                                    }
                                }
                            }
                        },
                        error: function (data, textStatus, errorThrown, error) {},
                    });
                }
            }

            function setrefresh1() {
                var x = 0;
                var c = 0;
                var currentrain = 0;
                if (counter == 0) {
                    for (x = 0; x < setID.length; x++) {

                        $.ajax({
                            method: 'get',
                            url: "/getAPI?id=" + setID[x],
                            dataType: 'json',
                            success: function (datani) {
                                if (datani.data.length != 0) {

                                    var t = datani.data[0].rain_value;
                                    //console.log(t);
                                    var e = 0;
                                    for (var y = 0; y < 4; y++) {
                                        e = e + parseFloat(datani.data[y].rain_value);
                                    }
                                    var i = e / 4;
                                    console.log(i)
                                    var q = datani.type_id;
                                    var m = datani.location;
                                    var date1 = datani.dateTimeRead;
                                    if (i > 0.4) {
                                        $.ajax({
                                            headers: {
                                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                            },
                                            url: "/addlog",
                                            method: 'POST',
                                            dataType: 'text',
                                            data: {
                                                location: q,
                                                raindata: i,
                                                gis: m,
                                                dateSent: date1
                                            },
                                            success: function (data) {
                                                console.log("test");
                                            },
                                            error: function (data) {
                                                console.log("test1");
                                            }
                                        });
                                    }
                                    for (var k = 0; k < markers.length; k++) {
                                        if (datani.dev_id == "Waterlevel") {
                                            markers[k].markerThreshold = i;

                                        }
                                        if (datani.dev_id != "Waterlevel") {
                                            if (markers[k].sensID == datani.dev_id) {
                                                if (i == 0) {
                                                    if (datani.type_id == "Rain2") {
                                                        markers[k].setIcon('assets/images/finaliconnorain.png');
                                                    }
                                                    if (datani.type_id == "Waterlevel & Rain 2") {
                                                        markers[k].setIcon('assets/images/tandemnorain.png');
                                                    }

                                                }

                                                if (i < 0.5 && i!=0 ) {
                                                    if (t == 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconnorain.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/tandemnorain.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                    }
                                                    if (t > 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconnoraincurrent.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/tandemnoraincurrent.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                    }
                                                }
                                                if (i > 0.5 && i < 2.5) {
                                                    if (t == 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconaccumulatedmoderate.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/noraintandemmoderate.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                    }
                                                    if (t > 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconmoderate.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/curraintandemmoderate.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                    }
                                                }
                                                if (i > 2.5 && i <= 7.50) {
                                                    if (t == 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconaccumulatedintense.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/noraintandemintense.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                    }
                                                    if (t > 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconcurrentrainintense.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/curraintandemintense.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                    }
                                                }
                                                if (i > 7.5) {
                                                    if (t == 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconaccumulatedheavy.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/noraintandemheavy.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                        }
                                                    }
                                                    if (t > 0) {
                                                        if (datani.type_id == "Rain2") {
                                                            markers[k].setIcon('assets/images/finaliconcurrentraintorrential.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                                            markers[k].setIcon('assets/images/curraintandemtorrential.png');
                                                            c++;
                                                            $('#countaccumulated span').text(c);
                                                            currentrain++;
                                                            $('#countcurrent span').text(currentrain);
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    }
                                } else {
                                    for (var k = 0; k < markers.length; k++) {
                                        if (datani.type_id == "Rain2") {
                                            if (markers[k].sensID == datani.dev_id) {
                                                markers[k].setIcon('assets/images/finaliconnorain.png');
                                            }
                                        }
                                        if (datani.type_id == "Waterlevel & Rain 2") {
                                            if (markers[k].sensID == datani.dev_id) {
                                                markers[k].setIcon('assets/images/tandemnorain.png');
                                            }
                                        }
                                    }
                                }
                            },
                            error: function (data, textStatus, errorThrown, error) {},
                        });
                    }
                    counter = 1;
                }

            }
        });
    }
}())
