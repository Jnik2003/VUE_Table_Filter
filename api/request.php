<?php

header('Access-Control-Allow-Origin: *');

define('SERVER', 'localhost');
define('USER', 'root');
define('PASSWORD', 'root');
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

$query = "SELECT * FROM `distance` WHERE 1"; 
     
$result = select($query);

echo json_encode($result, JSON_NUMERIC_CHECK);
?>
