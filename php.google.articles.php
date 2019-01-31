<?php
include 'simple_html_dom.php';

$blogs = scandir(__DIR__."/articles");
$thumbnails = array();

foreach($blogs as $blog) {
    if(strlen($blog) > 6) {
    $exp = explode('.', $blog);
    array_push($thumbnails, $exp[0]. ".png");}}
    
function Google_search() {
	$url ='https://www.google.com/search?q=airbnb+news&tbm=nws&source=lnt&tbs=qdr:m&sa=X&ved=0ahUKEwiAhMmfkbLeAhVHja0KHS6UCPcQpwUIIQ&biw=1536&bih=706&dpr=1.25';
	$html = file_get_html($url);
	$trending = array();
	$i=0;
	$linkObjs = $html->find('h3.r a'); 
	foreach ($linkObjs as $linkObj) {
    $title = trim($linkObj->plaintext);
    $link  = trim($linkObj->href);

    // if it is not a direct link but url reference found inside it, then extract
    if (!preg_match('/^https?/', $link) && preg_match('/q=(.+)&amp;sa=/U', $link, $matches) && preg_match('/^https?/', $matches[1])) {
        $link = $matches[1];
    } else if (!preg_match('/^https?/', $link)) { // skip if it is not a valid link
        continue;
    }

    $descr = $html->find('span.st',$i); // description is not a child element of H3 thereforce we use a counter and recheck.
      
    $trending[$i]['t'] = $title;
    $trending[$i]['l'] = $link;
    $trending[$i]['d'] = $descr;
    $i++; 
	}
	return $trending;
}


$top_layout = array();
$grid_layout = array();
$trending_layout = array();
$latest_layout = array();

?>
