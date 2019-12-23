<div class="header navbar">
  <div class="header-container">
    <ul class="nav-left">
      <li>
        <a id='sidebar-toggle' class="sidebar-toggle" href="javascript:void(0);">
          <i class="ti-menu"></i>
        </a>
      </li>

    </ul>
    <ul class="nav-right">
      <li class="notifications dropdown dropdown-notifications">
      <!--  <span class="counter bgc-red"></span> -->
      <span id="counternotif" data-count="0" class="counter bgc-blue notif-count invisible">0</span>
        <a id="clearcount" href="" class="dropdown-toggle no-after" data-toggle="dropdown">
          <i  class="ti-bell"></i>
        </a>

        <ul class="dropdown-menu">
          <li class="pX-20 pY-15 bdB">
            <i class="ti-bell pR-10"></i>
            <span class="fsz-sm fw-600 c-grey-900">Notifications</span>
            <span class="fsz-sm fw-600 c-grey-900 pull-right"><small><a href="#">Mark all as read</a></small></span>
          </li>
          
          <div class="startnotif pre-scrollable">
          </div> 
          <div id="nonotif">
          <li>
                <a href="" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                  <div class="peer mR-15">
                
                  </div>
                  <div class="peer peer-greed">
                    <span>
                      <span class="fw-500">No new notifications</span>
                     
                      </span>
                    </span>
        
                  </div>
                </a>
            </li>
          </div> 
          
          
          <li class="pX-20 pY-15 ta-c bdT">
            <span>
              <a href="" class="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i class="ti-angle-right fsz-xs mL-10"></i></a>
            </span>
          </li>
        </ul>
      </li>
      <li class="notifications dropdown">
      <!--    <span class="counter bgc-blue">3</span> -->
     


      </li>
      <li class="dropdown">
        <a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
          <div class="peer mR-10">
            <img class="w-2r bdrs-50p" src="{{ auth()->user()->avatar }}" alt="">
          </div>
          <div class="peer">
            <span class="fsz-sm c-grey-900">{{ auth()->user()->name }}</span>
          </div>
        </a>
        <ul class="dropdown-menu fsz-sm">
          <li>
            <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
              <i class="ti-settings mR-10"></i>
              <span>Setting</span>
            </a>
          </li>
          <li>
            <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
              <i class="ti-user mR-10"></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
              <i class="ti-email mR-10"></i>
              <span>Messages</span>
            </a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="/logout" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
              <i class="ti-power-off mR-10"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
