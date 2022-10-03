<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
// echo($data['limit'])


header('Access-Control-Allow-Origin: *');

define('SERVER', 'localhost');
define('USER', 'root');
// define('USER', 'pnikitinas_vdo3');
define('PASSWORD', 'root');
// define('PASSWORD', '0GAMdpEY');
define('DB', 'test_table');

$conn = connect();

function connect()
{
    $conn = mysqli_connect(SERVER, USER, PASSWORD, DB);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function select($query)
{
    global $conn;
    $queryResult = [];
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $queryResult[] = $row;
        }
    }
    return $queryResult;
}

if(isset($data['page']) && isset($data['limit'])){
    $value1 = ($data['page']-1)* $data['limit'] + 1;
// $value1 = 5;
    $value2 = $data['page'] * $data['limit'];
// $value2 = 9;

// $query = "SELECT * FROM `distance`  WHERE 1 limit ".$data['limit'];  
 
$query = "SELECT * FROM `distance` WHERE id BETWEEN $value1 AND $value2"; 
}else{
   $query = "SELECT * FROM `distance`  WHERE 1";  
}

 
     
$result = select($query);


echo json_encode($result, JSON_NUMERIC_CHECK);
?>