<?php
require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "546813797-8KbnY9EGBQZyTC1CtSoIUIZdAyN8ibkLraioeMYV",
    'oauth_access_token_secret' => "0BqKJ4tTAzMVkYjnPfl3A1vz67z0CPY9iybPDzmeauqNu",
    'consumer_key' => "u0I5ZfhgoxHMrDrvsz3sOHI93",
    'consumer_secret' => "kr7UGzkv8uOFzbghMah1mo7jXjpHjpXpnUWrh62l9Ip9anJNZb"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=infoo_red&count=10';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$json =  $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

$datos = json_decode($json);
$cad = '{"data":[';
foreach ($datos as $tweet){
    $cad.='{"fecha":"'.$tweet->created_at.'",';
    $cad.='"tweet":"'.$tweet->text.'"},';
}
$cad = substr($cad, 0, -1);
$cad.=']}';
echo $cad;
//print_r($datos);