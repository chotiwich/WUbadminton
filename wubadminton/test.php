<?php
include 'DBConfig.php';
$message ='';

$conn =new mysqli($HostName,$HostUser,$HostPass,$DatabaseName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM user_login"; 
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
