@extends('admin.default')
@section('content')
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
	 <div class="bgc-white bd bdrs-3 p-20 mB-20">
	   <h4 class="c-grey-900 mB-20">Waterlevel History</h4>
	   <table id="waterlevellogtable" class="table table-striped table-bordered" cellspacing="0" width="100%">
		  <thead>
		    <tr>
			 <th  width="100" style="text-align:center;" >Date</th>
			 <th  width="100" style="text-align:center;">Sensor Name</th>
			 <th  width="100" style="text-align:center;">Waterlevel Value</th>
            
		    </tr>
		  </thead>
		</table>
	 </div>
    </div>
  </div>
</div>
@endsection
