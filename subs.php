<?php
if (isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'subs':
        saveSubscription($_POST['email']);
            break;
    }
}
function saveSubscription($email){
    $myfile = fopen("subsEmails.txt", "w");
    fwrite($myfile, $email ."\n");
    fclose($myfile);
}
 ?>