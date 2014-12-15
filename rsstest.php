<?php

//GET RSS FEEDS FROM TOGGLES THAT ARE ON and Build Variables

$s1 = $_GET['site1'];
$s2 = $_GET['site2'];


// Include the SimplePie library
// For 1.0-1.2:
#require_once('simplepie.inc');
// For 1.3+:
require_once('simplepie/autoloader.php');
 
// Create a new SimplePie object
$feed = new SimplePie();
 
// Instead of only passing in one feed url, we'll pass in an array of two or more

if($s1 == 1 && $s2 == 0) {
	$feed->set_feed_url(array(
		'http://www.huffingtonpost.com/feeds/verticals/arts/index.xml'
	));
} elseif ($s1 == 1 && $s2 == 1) {
	$feed->set_feed_url(array(
		'http://rss.cnn.com/rss/cnn_tech.rss',
		'http://www.huffingtonpost.com/feeds/verticals/arts/index.xml'
	));
} elseif ($s1 == 0 && $s2 == 1) {
	$feed->set_feed_url(array(
		'http://rss.cnn.com/rss/cnn_tech.rss'
	));
} else {
	echo "<div class='no-feed-message'>";
	echo "Please Toggle A Feed";
	echo "</div>";
}


 
// We'll use favicon caching here (Optional)
$feed->set_favicon_handler('handler_image.php');
 
// Initialize the feed object
$feed->init();
 
// This will work if all of the feeds accept the same settings.
$feed->handle_content_type();
 
// Begin our XHTML markup
?>



<!--Shorten Description-->

				<?php
function shorten($string, $length)
{
    // By default, an ellipsis will be appended to the end of the text.
    $suffix = '...';
 
    // Convert 'smart' punctuation to 'dumb' punctuation, strip the HTML tags,
    // and convert all tabs and line-break characters to single spaces.
    $short_desc = trim(str_replace(array("\r","\n", "\t"), ' ', strip_tags($string)));
 
    // Cut the string to the requested length, and strip any extraneous spaces 
    // from the beginning and end.
    $desc = trim(substr($short_desc, 0, $length));


 
    // Find out what the last displayed character is in the shortened string
    $lastchar = substr($desc, -1, 1);
 
    // If the last character is a period, an exclamation point, or a question 
    // mark, clear out the appended text.
    if ($lastchar == '.' || $lastchar == '!' || $lastchar == '?') $suffix='';
 
 	

    // Append the text.
    $desc .= $suffix;
 
    // Send the new description back to the page.
    return $desc;
}
?>





<div id="site">



		<div id="site_container" class="wrap">
 
			<?php if ($feed->error): ?>
			<p><?php echo $feed->error; ?></p>
			<?php endif; ?>
	 	 
			<?php foreach ($feed->get_items(0,10) as $item): ?>


	 		
			<div class="row chunk" style="background:#fff;">

				<?php 
					//$media_group = $item->get_item_tags('', 'enclosure');
	            	if ($enclosure = $item->get_enclosure())
					{
	            	$image_file = $enclosure->get_link();
	           		 }
	            	 
	            	if($image_file === null) {
	            		$article_image = $feed->get_favicon();
	             	} else {
	             		$article_image = $enclosure->get_link(); 
	             	}

	             	//var_dump($article_image);
	            ?>
	            <div class="col-xs-3 article-image">
		 			 <img src="<?php echo $article_image; ?>"> 
		 	
		 			
		 		</div>

				<?php /* Here, we'll use the $item->get_feed() method to gain access to the parent feed-level data for the specified item. */ ?>
				<div class="col-xs-9 article">
					<div class="textcontent">
				
					<p class="articletitle">
						<a href="#" onclick="window.open('<?php echo $item->get_permalink(); ?>', '_blank', 'location=yes');">
					<?php 

					$full_title = strlen($item->get_title());
					$short_title = shorten($item->get_title(), 40);
					$value = 40;
					if($full_title >= $value) {
						echo $short_title;
					} else {
						echo $item->get_title();
					}
						?>
						</a>
					</p>

					<!-- <p class="textcontent"><?php echo $item->get_content(); ?>
					<?php echo shorten($item->get_content(), 60); ?></p>-->



					
	 				<!-- <h4>CATEGORIES</h4> -->
	 				<!--<?php 
				 		foreach ($item->get_categories() as $category)
						{
							echo $category->get_label();
							echo ', ';
						}
						
				 	?>-->
	

	 				</div> <!-- close text content -->

 				<small class="footnote">

 					

				<p class="footnotetext"><a href="<?php $feed = $item->get_feed(); echo $feed->get_permalink(); ?>"><?php $feed = $item->get_feed(); echo $feed->get_title(); ?></a><!-- Huffington Post --> | <?php echo $item->get_date('H'); ?> hours ago | Arts</p></small>


				</div>	<!-- End 9 col -->
	 		</div> <!-- Chunk -->

			<?php endforeach; ?>
			</div> <!-- site container -->
	</div><!-- id site div-->
	