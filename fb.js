 /*window.app = {};

  function login() {
    FB.login(function(response) {
      if (response.authResponse) {
          // connected
        app.uid = response.authResponse.userID;
        buildMain();
        viewMain();
      } else {
          // cancelled
        viewLogin();
      }
    });
  }*/

  function buildMain() {
    var img = document.createElement('img');
    img.src = 'http://graph.facebook.com/' + app.uid + '/picture?type=large';
	//var name = document.createElement('name');
	//name.src = 'http://graph.facebook.com/' +
    document.getElementById('main').appendChild(img);
  }

  /*function viewLogin() {
    document.getElementById('main').style.visibility = 'hidden';
    document.getElementById('login').style.visibility = 'visible';
  }

  function viewMain() {
    document.getElementById('main').style.visibility = 'visible';
    document.getElementById('login').style.visibility = 'hidden';
  }


  // Additional JS functions here
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '117308931781667', 
      //channelUrl : '//localhost:5000/channel.html', 
      status     : false,  // check login status
      cookie     : false,  // enable cookies to allow the server to access the session
      xfbml      : false   // parse XFBML
    });
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // logged in and authorized
        app.uid = response.authResponse.userID;
        buildMain();
        viewMain();
      } else if (response.status === 'not_authorized') {
        // logged in and not authorized
        viewLogin();
      } else {
        // not logged in
        viewLogin();
      }
    });
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));*/