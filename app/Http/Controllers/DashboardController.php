<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
class DashboardController extends Controller
{
    public function index()
    {
        return view('admin.dashboard.index');
    }



    function getCoordinates(){

         $client = new \GuzzleHttp\Client();

        $request = $client->get('http://weather.asti.dost.gov.ph/web-api/index.php/api/devices', [
             'auth' => [
                  'dostregion11',
                  'dostElev3n1116'
             ]
        ]);
         //$request->setHeader('Authorization', "auth-code");
       // $response = $request->getBody()->getContents();
       $response = json_decode($request->getBody(), true);
        $coords = array_filter($response, function($obj){
            if ($obj["region"] == "11") {
                return true;
            }
        });
         return json_encode($coords);
    }

    public function findAPI(Request $request)
    {

          $dev_id = $request->id;;
          $client = new \GuzzleHttp\Client();
          $ex1 = $dev_id;
          $ex = "http://weather.asti.dost.gov.ph/web-api/index.php/api/data/".$ex1;
         $request = $client->get($ex , [
              'auth' => [
                   'dostregion11',
                   'dostElev3n1116'
              ]
         ]);
        //$request->setHeader('Authorization', "auth-code");
        // $response = $request->getBody()->getContents();
        $response = json_decode($request->getBody(), true);
        echo json_encode($response);

    }

}
