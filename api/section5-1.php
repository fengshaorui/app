<?php
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','root','ingping');
if($mysqli->connect_errno){
    die();
}
$type=$_POST["type"];
$sql = "select * from section5two where type='$type'";
$result = $mysqli->query($sql);
if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){
        $list1[]=$row;
    }
    $data[1]=$list1;
}
echo json_encode($data);

?>