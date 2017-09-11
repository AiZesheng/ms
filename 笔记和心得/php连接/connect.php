<?php  
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "IBS";
	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->query("set names utf8");
	function result($result){
		$arr = array();
		if ($result->num_rows > 0) {
		    // 输出每行数据
		    while($row = $result->fetch_array()) {
		        $arr[] = $row;
		    }
		} else {
		    echo "0 个结果";
		}
		return $arr;
	}
	function row($result){
		$row = $result->fetch_array();
		return $row;
	}
?>