<?php

$dir_path = $_SERVER['DOCUMENT_ROOT'].'/examples';

if ($handle = opendir($dir_path)) {
    $files = [];
    while ($entry = readdir($handle)) {
        if ($entry !== '.' && $entry !== '..') {
            $files[] = $entry;
        }
    }

    echo json_encode(['success' => true, 'files' => $files]);
    return ;
} else {
    echo json_encode(['success' => false]);
}
