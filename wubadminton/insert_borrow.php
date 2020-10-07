<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
$id = $obj['id'];
 // Populate User name from JSON $obj array and store into $name.
$people_name = $obj['people_name'];
 
// Populate User email from JSON $obj array and store into $email.
$type_borrow = $obj['type_borrow'];
 
// Populate Password from JSON $obj array and store into $password.
$num_borrow = $obj['num_borrow'];
 
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into people_borrow (id,people_name,type_borrow,num_borrow) values ('$id','$people_name','$type_borrow','$num_borrow')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>