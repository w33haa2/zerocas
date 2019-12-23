
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });

var Pusher = require('pusher-js');
var pusher = new Pusher('670b5aed16da60ab7ae7', {
    cluster: 'ap1',
  });
    var notificationsWrapper   = $('.dropdown-notifications');
    var notificationsToggle    = notificationsWrapper.find('a[data-toggle]');
    var notificationsCountElem = notificationsToggle.find('span[data-count]');
    var notificationsCount     = parseInt(notificationsCountElem.data('count'));
    var notifications          = notificationsWrapper.find('div.startnotif');

      if (notificationsCount <= 0) {
        notificationsWrapper.hide();
      }

      // Enable pusher logging - don't include this in production
      // Pusher.logToConsole = true;

     
      // Subscribe to the channel we specified in our Laravel Event
      var channel = pusher.subscribe('heavy-rain');
      var notifcount = 0;
      // Bind a function to a Event (the full Laravel class)
      channel.bind('App\\Events\\heavyrain', function(data) {
        var existingNotifications = notifications.html();
        var ts = new Date(data.date);
        var newNotificationHtml = `
          <li>
                <a href="/admin/rainlog" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                  <div class="peer mR-15">
                    <img class="w-3r bdrs-50p" src="https://i.imgur.com/AV3Hrek.png" alt="50x50" style="width: 50px; height: 50px;">
                  </div>
                  <div class="peer peer-greed">
                    <span>
                      <span class="fw-500">`+data.location+` Accumulated Rainfall Warning</span>
                      <span class="c-grey-600">`+data.message+`</span>
                      </span>
                    </span>
                    <p class="m-0">
                      <small class="fsz-xs timestamp">`+ts.toLocaleTimeString()+`</small>
                    </p>
                  </div>
                </a>
            </li>
        `;
        notifications.html(newNotificationHtml + existingNotifications);
        notificationsCount += 1;
        notifcount = notifcount + 1;
        $("#counternotif").removeClass("invisible");
        $("#counternotif").text(notifcount);
        notificationsWrapper.show();
      });
      $("#clearcount").on('click', function() {
          if(notifcount>0){
            $("#nonotif").hide();
            $("#counternotif").addClass("invisible");
            notifcount = 0;
          }
       
       
      
      });