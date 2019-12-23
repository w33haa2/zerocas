<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Project ZeroCas</title>

  <!-- Styles -->

     <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
  <style type = "text/css">
  #container {
  min-width: 310px;
  max-width: 800px;
  height: 400px;
  margin: 0 auto
}
  </style>
</head>
<body class="app" >

    @include('admin.partials.spinner')

    <div>
      <!-- #Left Sidebar ==================== -->
      @include('admin.partials.sidebar')

      <!-- #Main ============================ -->
      <div class="page-container">
        <!-- ### $Topbar ### -->
        @include('admin.partials.topbar')

        <!-- ### $App Screen Content ### -->
        <main class='main-content bgc-grey-100'>
          <div id='mainContent'>

              <h4 class="c-grey-900 mT-10 mB-30">@yield('page-header')</h4>

              @include('admin.partials.messages')
              @yield('content')


          </div>
        </main>

        <!-- ### $App Screen Footer ### -->
				<footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
					<span>Copyright © 2018 Project ZeroCas.  All rights reserved.</span>
				</footer>
      </div>
    </div>

    <script src="{{ mix('/js/app.js') }}"></script>
    <script>
 

</script>

</body>
</html>
