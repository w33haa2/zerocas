import * as $ from 'jquery';
import 'datatables';
 
export default (function () {
  $('#dataTable').DataTable({
		language: {
			// 'url' : 'https://cdn.datatables.net/plug-ins/1.10.16/i18n/French.json'
			// More languages : http://www.datatables.net/plug-ins/i18n/
		},
		aaSorting: []
	});
  
      $('#rainlogtable').DataTable({
         dom: 'Bfrtip',
         buttons: [
         ],
         order: [[ 0, "desc" ]],
         processing: true,
        columnDefs: [
            {
                "targets": "_all", // your case first column
               "className": "text-center",
                
           }
        ],
         serverSide: true,
         ajax: "/refresh_rainlog",
         columns: [
            {data: 'dateTimeRead', name: 'dateTimeRead',
			type: "date",
             render:function (value) {
	                var ts = new Date(value);

                  return ts.toDateString()+" "+ts.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            },
             {data: 'location', name: 'location'},
             {data: 'raindata', name: 'raindata',
             type: "string",
              render:function (value) {
                   
                     var twoPlacedFloat = parseFloat(value).toFixed(2)
                   return twoPlacedFloat}
             },
             {data: 'description', name: 'description'},
         ]
    });

    $('#waterlevellogtable').DataTable({
        dom: 'Bfrtip',
        buttons: [
        ],
        order: [[ 0, "desc" ]],
        processing: true,
       columnDefs: [
           {
               "targets": "_all", // your case first column
              "className": "text-center",
               
          }
       ],
        serverSide: true,
        ajax: "/refresh_waterlog",
        columns: [
           {data: 'dateTimeRead', name: 'dateTimeRead',
           type: "date",
            render:function (value) {
                   var ts = new Date(value);

                 return ts.toDateString()+" "+ts.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
           },
            {data: 'location', name: 'location'},
            {data: 'waterlevel', name: 'waterlevel',
            type: "string",
             render:function (value) {
                  
                    var twoPlacedFloat = parseFloat(value).toFixed(2)
                  return twoPlacedFloat}
            },
           
        ]
   });
}());
