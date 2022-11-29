<?php

namespace App\Http\Controllers;

use App\Models\myModel;
use Illuminate\Http\Request;

class myController extends Controller
{
    public function select(){
        $data = myModel::all();
        return response()->json($data);
    }
    
    public function insert(Request $request){
        $data = new myModel;
        $data->name = $request->name;
        $data->save();
        return response()->json($data);
    }
    public function delete($id){
        $data = myModel::find($id);
        $data->delete();
        return response()->json($data);
    }

    public function edit($id){
        $data = myModel::find($id);
        return response()->json($data);
    }

    public function update(Request $request,$id){
        $data = myModel::find($id);
        $data->name = $request->name;
        $data->save();
        return $data;
    }
}
