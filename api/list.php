<?php
    include("../inc/dbconn.php");

    if($_GET["page"]==0){
        $type=$_GET["type"];
        $sql="select * from shop where type='$type' limit 6";
    }else{
        $type=$_GET["type"];
        $page=$_GET["page"];
        $start=$page*6+1;
        $sql="select * from shop where type='$type' limit $start,6";
    }
    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>