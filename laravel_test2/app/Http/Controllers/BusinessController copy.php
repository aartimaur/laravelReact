<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use Illuminate\Support\Facades\Validator;
class BusinessController extends Controller
{
    public function addBusiness(Request $request)
    {
       
           $validater= Validator::make($request->all(), [

                'name' => 'required|max:191',
                'address'=>'required|max:95',
                'personname'=>'required|max:5',
                'email' => 'required|email|max:50',
                'website'=>'required|max:116',
                
    
           ]);
           if($validater->fails())
           {
            return response()->json([
                'status'=>'422',
                'error'=>$validater->errors(),
            ]);
           }
       else{
        

       
            Business::insert([
   
               'name'=>$request->name,
               'address'=>$request->address,
               'email'=>$request->email,
               'website'=>$request->website,
               'personname'=>$request->personname,
               'phone_number'=>$request->phone_number
            ]);
            return response()->json(['status'=>'200',
            'msg'=>'Business Details added Successfully!']);
        }
            
       }
    public function business()
          {
          //$business_de=  Business::all();
           return response()->json(Business::get());
          }
}
