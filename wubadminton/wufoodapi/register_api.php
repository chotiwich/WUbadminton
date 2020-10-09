<?php
include 'config_file.php';
$message ='';

$conn =new mysqli($host_name,$host_user,$host_password,$database_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = ['Regis_Username']
$password = ['Regis_Password']


$sql = "INSERT INTO user(userID, user_name, user_age, user_address, user_email, username, password, userToken) 
$sql .=  VALUES ("","","","","","$username","$password","")"; 
$result = $conn ->query($sql);

if ($result->num_rows>0) {
	while ($row[]=$result->fetch_assoc()) {
		$item = $row;
		$json = json_encode($item);
	}
	}else{
		echo "No result";
}
echo $json;
$conn->close();

