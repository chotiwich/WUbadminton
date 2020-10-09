<?php
include 'DBConfig.php';
$message ='';

$conn =new mysqli($host_name,$host_user,$host_password,$database_name);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

	 
	 
	
$Sql_Query = "select * from user_login where email = '$_GET[user_email]' and password = '$_GET[user_password]' ";
$check = mysqli_fetch_array(mysqli_query($conn,$Sql_Query));
// Executing SQL Query.use

if(isset($check)){

 	$SuccessLoginMsg = 'Data Matched';
 
 // Converting the message into JSON format.
	$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 	echo $SuccessLoginJson ; 

 }else{
 
 // If the record inserted successfully then show the message.
	$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
	$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 	echo $InvalidMSGJSon ;
 
 }
mysqli_close($conn);
	
?>