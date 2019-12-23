@extends('admin.default')
@section('content')


     <div class="modal fade" id="chartModal" tabindex="-1" data-backdrop="false" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
               <div class="modal-content">
                    <div class="modal-body">
                         <div class="masonry-item col-lg-12">
                              <br>
                           <div class="bgc-white p-20 bd">
                             <div class="mT-30">
   		                           <div id="container"></div>
                             </div>
                           </div>
                         </div>
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-btn cur-p btn-outline-primary" data-dismiss="modal">Close</button>
                    </div>
               </div>
          </div>
     </div>
     <div class="modal fade" id="chartwaterlevelModal" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
               <div class="modal-content">
                    <div class="modal-body">
                         <div class="masonry-item col-lg-12">
                              <br>
                           <div class="bgc-white p-20 bd">
                             <div class="mT-30">
   		                           <div id="container23"></div>
                             </div>
                           </div>
                         </div>
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-btn cur-p btn-outline-primary" data-dismiss="modal">Close</button>
                    </div>
               </div>
          </div>
     </div>
     <div class="modal fade" id="chartwaterfallModal" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
               <div class="modal-content">
                    <div class="modal-header">

                         <div class="close">
                              <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="tabpanel" aria-label="First group">
                              <ul class="nav nav-tabs" role="tablist">
                           <li>  <a href="#container1" data-toggle="tab"class="btn btn-outline-secondary active show">Waterlevel</a></li>
                           <li>   <a href="#container2" data-toggle="tab" class="btn btn-outline-secondary">Rainfall</a></li>
                        </ul>
                        </div>
                   </div>
                    </div>
               </div>
                    <div class="modal-body">
                         <div class="masonry-item col-lg-12">
                              <br>
                           <div class="bgc-white p-20 bd">
                             <div class="mT-30">
                                        <div class="tab-content">
                                             <div role="tabpanel"  id="container1" class="tab-pane fade in active show ">
                                             </div>
                                             <div role="tabpanel" id="container2" class=" tab-pane fade in ">
                                             </div>
                                </div>
                             </div>
                           </div>
                         </div>
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-btn cur-p btn-outline-primary" data-dismiss="modal">Close</button>
                    </div>
               </div>
          </div>
     </div>
     <div class="row gap-20 masonry pos-r">
       <div class="masonry-sizer col-md-6"></div>
       <div class="masonry-item  w-100">
           <div class="row gap-20">
               <!-- #Toatl Visits ==================== -->
               <div class='col-md-3'>
                   <div class="layers bd bgc-white p-20">
                       <div class="layer w-100 mB-10">
                          <h6 class="lh-1">Total Number of Sensors </h6>
                       </div>
                       <div class="layer w-100">
                          <div class="peers ai-sb fxw-nw">
                               <div class="peer peer-greed"  id="countsensor">
                                  <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500" ></span>
                               </div>
                               
                          </div>
                       </div>
                   </div>
               </div>
               <!-- #Unique Visitors ==================== -->
               <div class='col-md-3'>
                   <div class="layers bd bgc-white p-20">
                       <div class="layer w-100 mB-10">
                          <h6 class="lh-1">Areas with Significant Increase of Rainfall</h6>
                       </div>
                       <div class="layer w-100">
                          <div class="peers ai-sb fxw-nw" id="countaccumulated">
                               <div class="peer peer-greed">
                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">0</span>
                               </div>
                               
                          </div>
                       </div>
                   </div>
               </div>
               
               <div class='col-md-3'>
                   <div class="layers bd bgc-white p-20">
                       <div class="layer w-100 mB-10">
                          <h6 class="lh-1">Currently Raining Areas</h6>
                       </div>
                       <div class="layer w-100">
                          <div class="peers ai-sb fxw-nw">
                               <div class="peer peer-greed" id="countcurrent">
                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">0</span>
                               </div>
                              
                          </div>
                       </div>
                   </div>
               </div>

                <div class='col-md-3'>
                   <div class="layers bd bgc-white p-20">
                       <div class="layer w-100 mB-10">
                          <h6 class="lh-1">Currently Increasing Water Levels</h6>
                       </div>
                       <div class="layer w-100">
                          <div class="peers ai-sb fxw-nw">
                               <div class="peer peer-greed" id="countcurrentwaterlevel">
                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">0</span>
                               </div>
                              
                          </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="masonry-item col-12">
           <!-- #Site Visits ==================== -->
           <div class="bd bgc-white">
               <div class="peers fxw-nw@lg+ ai-s">
                   <div class="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                       <div class="layers">
                       <div class="layer w-100">
                       <h5 class="mB-5"></canvas> Sensors </h5>
                        </div>
                        <br>
                        <br>
                        <br>
                          <div class="layer w-100">
                               <div id="google-map" name="google-map" style="padding-bottom: 65%;  margin-top:-35px;"></div>

                          </div>
                          
                       </div>
                   </div>
                   <div class="peer bdL p-20 w-20p@lg+ w-100p@lg-">
                       <div class="layers">
                          <div class="layer w-100">
                               <!-- Progress Bars -->
                               <div class="layers">
                                   <div class="layer w-100">
                                       <h5 class="mB-5"></canvas> Very Light Rainfall </h5>
                                       <img src="assets/images/icon_norain.png"  height="55" width="55" alt="">
                                       <small class="fw-600 c-grey-700">Trace or no rainfall observed in 1 hour</small>
                                       <span class="pull-right c-grey-600 fsz-sm"></span>
                                       <div class="progress mT-10">
                                           <div class="progress-bar bgc-grey-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%;"> <span class="sr-only"></span></div>
                                       </div>
                                   </div>
                                   <div class="layer w-100 mT-15">
                                       <h5 class="mB-5"> Light Rainfall</h5>
                                       <img src="assets/images/finaliconaccumulatedmoderate.png"  height="55" width="55" alt="">
                                       <small class="fw-600 c-grey-700">0.5mm - 2.5mm of accumulated rainfall observed in 1 hour</small>
                                       <span class="pull-right c-grey-600 fsz-sm"></span>
                                       <div class="progress mT-10">
                                           <div class="progress-bar bgc-deep-blue-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%;"> <span class="sr-only"></span></div>
                                       </div>
                                   </div>
                                   <div class="layer w-100 mT-15">
                                       <h5 class="mB-5"> Moderate Rainfall</h5>
                                       <img src="assets/images/finaliconaccumulatedintense.png"  height="55" width="55" alt="">
                                       <small class="fw-600 c-grey-700">2.6mm - 7.5mm of accumulated rainfall observed in 1 hour</small>
                                       <span class="pull-right c-grey-600 fsz-sm"></span>
                                       <div class="progress mT-10">
                                           <div class="progress-bar bgc-orange-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%; "> <span class="sr-only"></span></div>
                                       </div>
                                   </div>
                                   <div class="layer w-100 mT-15">
                                       <h5 class="mB-5"> Heavy Rainfall</h5>
                                       <img src="assets/images/finaliconaccumulatedtorrential.png"  height="55" width="55" alt="">
                                       <small class="fw-600 c-grey-700">7.6mm or higher observed in 1 hour</small>
                                       <span class="pull-right c-grey-600 fsz-sm"></span>
                                       <div class="progress mT-10">
                                           <div class="progress-bar bgc-red-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%;"> <span class="sr-only"></span></div>
                                       </div>
                                   </div>
                                   <div class="layer w-100 mT-15">
                                   <h5 class="mB-5">Special Indicators</h5>
                                       <img src="assets/images/drop.png"  height="70" width="70" alt="">
                                       <small class="fw-600 c-grey-700">Currently Raining </small>
                                     
                                   </div>
                               </div>
                               <!-- Pie Charts -->
                              
                          </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>


</div>


@endsection
