<?php 
    header('Content-Type: application/json');   
    include 'data2.php';
    $access = $_GET['access'];
    $res = [];
    foreach ($graphs as $key => $elems) {
        if ($elems['access']==$access && $elems['access'] =='clevel') {
            $res[]=$graphs['fatturato'];
            $res[]=$graphs['fatturato_by_agent'];
            $res[]=$graphs['team_efficiency'];
        }
        if ($elems['access']==$access && $elems['access'] =='employee') {
            $res[]=$graphs['fatturato'];
            $res[]=$graphs['fatturato_by_agent'];
        }
        if ($elems['access']==$access && $elems['access'] =='guest') {
            $res[]=$graphs['fatturato'];
        }
        // if ($elems['access']==$access && $elems['access'] =='clevel') {
        //     $res[]=$elems;
        // }

    }
    echo json_encode($res);