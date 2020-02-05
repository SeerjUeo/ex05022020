<?php
$servername = "localhost";
$username = "admin";
$password = "admin";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "SELECT nume, categorie, imagine FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Nume: " . $row["nume"]. " - Categorie: " . $row["categorie"]. ", precum in imagine: " . $row["imagine"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close(); 
?> 