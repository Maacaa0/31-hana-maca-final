<?php
// load website
$www = file_get_contents("https://kariera.army.cz/volna-mista");
// strip header
list($pred, $za) = explode("<div class=\"item-list\">", $www);
$www = $za;
unset($pred, $za);
// strip footer
$pole = explode("</section>", $www);
$www = trim($pole[0]);
$i = 0;
while($i<10){
  $www = rtrim($www);
  $www = rtrim($www, "</div>");
  $www = rtrim($www);
  $i++;
}
unset($pole, $i);
// remove tag ul      
$www = ltrim($www, '<ul>');
$www = rtrim($www, '</ul');
$www = trim($www);
// insert url of images to absolute path
$www = str_replace("src=\"/sites/kariera", "src=\"https://kariera.army.cz/sites/kariera", $www);
// delimiter of boxes and filter Liberec=123
$pole = explode("<li class=\"views-row", $www);
$pole2 = array();
foreach($pole as $key=>$polozka){
  if(trim($polozka)==null){
    continue;
  }
  $polozka =  "<li class=\"views-row".$polozka;
  if(str_contains($polozka, '<li>123</li>')){
    $pole2[] = $polozka;
  }
}
$pole = $pole2;
unset($pole2);

// print
echo '<ul>';
foreach($pole as $polozka){
  echo $polozka;
}
echo '</ul>';
// clean
unset($pole);
?>