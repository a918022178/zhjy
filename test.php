<?php
function setUid($uid){
    import("Base64");
    $uid = 'USER_'.$uid.'_'.NOW_TIME;
    $uid = Base64::encrypt($uid, C('AUTH_KEY'));
    cookie('JIUCHUN_TOKEN',$uid,86400*365); //存一年
    return true;
}
setUid(22);
?>
