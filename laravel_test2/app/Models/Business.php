<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;
    protected $table = 'business';
    protected $fillabl =[
        'name',
        'address',
        'email',
        'website',
        'personname',
        'phone_number',
      
    ];
}
