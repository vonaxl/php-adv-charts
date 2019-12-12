<?php 
    header('Content-Type: application/json');   
    include 'data2.php';
    $res = [];
    foreach ($graphs['fatturato_by_agent']['data'] as $agent => $agents) {
        $res[] = $agent;
    }
    echo json_encode($graphs);