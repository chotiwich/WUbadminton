<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
$student_id = $obj['student_id'];
 // Populate User name from JSON $obj array and store into $name.
$people_name = $obj['people_name'];
 
// Populate User email from JSON $obj array and store into $email.
$school_of = $obj['school_of'];
 
// Populate Password from JSON $obj array and store into $password.
$book_time = $obj['book_time'];

$num_course = $obj['num_course'];

$People_tel = $obj['People_tel'];



 
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into book_course (student_id,people_name,school_of,book_time,num_course,People_tel) values ('$student_id','$people_name','$school_of','$book_time','$num_course','$People_tel')";
 
 
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