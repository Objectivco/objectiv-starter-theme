<?php

	class TestTimberHelper extends Timber_UnitTestCase {

		function testPluckArray() {
			$arr = array();
			$arr[] = array('name' => 'Bill', 'number' => 42);
			$arr[] = array('name' => 'Barack', 'number' => 44);
			$arr[] = array('name' => 'Hillary', 'number' => 45);
			$names = \Timber\Helper::pluck($arr, 'name');
			$this->assertEquals(array('Bill', 'Barack', 'Hillary'), $names);
		}

		function testPluckArrayMissing() {
			$arr = array();
			$arr[] = array('name' => 'Bill', 'number' => 42);
			$arr[] = array('name' => 'Barack', 'number' => 44);
			$arr[] = array('name' => 'Hillary', 'number' => 45);
			$arr[] = array('name' => 'Donald');
			$names = \Timber\Helper::pluck($arr, 'number');
			$this->assertEquals(array(42, 44, 45), $names);
		}

		function testPluckObject() {
			$billy = new stdClass();
			$billy->name = 'Billy Corgan';
			$billy->instrument = 'guitar';
			$jimmy = new stdClass();
			$jimmy->name = 'Jimmy Chamberlin';
			$jimmy->instrument = 'drums';
			$pumpkins = array($billy, $jimmy);
			$instruments = \Timber\Helper::pluck($pumpkins, 'instrument');
			$this->assertEquals(array('guitar', 'drums'), $instruments);
		}

		function testCommentFormPHP() {
			$post_id = $this->factory->post->create();
			$form = TimberHelper::get_comment_form($post_id);
			$form = trim($form);
			$this->assertStringStartsWith('<div id="respond"', $form);
		}

		function testTrimCharacters() {
			$text    = "Sometimes you need to do such weird things like remove all comments from your project.";
			$trimmed = \Timber\TextHelper::trim_characters( $text, 20 );
			$this->assertEquals( "Sometimes yo&hellip;", $trimmed );
		}

		function testCloseTagsWithSelfClosingTags(){
			$p = '<p>My thing is this <hr>Whatever';
			$html = \Timber\Helper::close_tags($p);
			$this->assertEquals('<p>My thing is this <hr />Whatever</p>', $html);
		}

		function testCommentForm() {
			$post_id = $this->factory->post->create();
			$form = TimberHelper::ob_function( 'comment_form', array( array(), $post_id ) );
			$form = trim($form);
			$this->assertStringStartsWith('<div id="respond"', $form);
		}

		function testWPTitle(){
        	//since we're testing with twentyfourteen -- need to remove its filters on wp_title
        	remove_all_filters('wp_title');
            remove_theme_support( 'title-tag' );
        	$this->assertEquals('', TimberHelper::get_wp_title());
        }

        function testWPTitleSingle(){
        	//since we're testing with twentyfourteen -- need to remove its filters on wp_title
        	remove_all_filters('wp_title');
        	$post_id = $this->factory->post->create(array('post_title' => 'My New Post'));
        	$post = get_post($post_id);
            $this->go_to( site_url( '?p='.$post_id ) );
        	$this->assertEquals('My New Post', TimberHelper::get_wp_title());
        }

		function testCloseTags() {
			$str = '<a href="http://wordpress.org">Hi!';
			$closed = Timber\TextHelper::close_tags($str);
			$this->assertEquals($str.'</a>', $closed);
		}

		function testArrayToObject(){
			$arr = array('jared' => 'super cool');
			$obj = TimberHelper::array_to_object($arr);
			$this->assertEquals('super cool', $obj->jared);
		}

		function testArrayArrayToObject() {
			$arr = array('jared' => 'super cool', 'prefs' => array('food' => 'spicy', 'women' => 'spicier'));
			$obj = TimberHelper::array_to_object($arr);
			$this->assertEquals('spicy', $obj->prefs->food);
		}

		function testGetObjectIndexByProperty(){
			$obj1 = new stdClass();
			$obj1->name = 'mark';
			$obj1->skill = 'acro yoga';
			$obj2 = new stdClass();
			$obj2->name = 'austin';
			$obj2->skill = 'cooking';
			$arr = array($obj1, $obj2);
			$index = TimberHelper::get_object_index_by_property($arr, 'skill', 'cooking');
			$this->assertEquals(1, $index);
			$obj = TimberHelper::get_object_by_property($arr, 'skill', 'cooking');
			$this->assertEquals('austin', $obj->name);
		}

		/**
     	 * @expectedException InvalidArgumentException
     	 */
		function testGetObjectByPropertyButNo() {
			$obj1 = new stdClass();
			$obj1->name = 'mark';
			$obj1->skill = 'acro yoga';
			$obj = TimberHelper::get_object_by_property($obj1, 'skill', 'cooking');
		}

		function testTimers() {
			$start = TimberHelper::start_timer();
			sleep(1);
			$end = TimberHelper::stop_timer($start);
			$this->assertContains(' seconds.', $end);
			$time = str_replace(' seconds.', '', $end);
			$this->assertGreaterThan(1, $time);
		}

		function testArrayTruncate() {
			$arr = array('Buster', 'GOB', 'Michael', 'Lindsay');
			$arr = TimberHelper::array_truncate($arr, 2);
			$this->assertContains('Buster', $arr);
			$this->assertEquals(2, count($arr));
			$this->assertFalse(in_array('Lindsay', $arr));
		}

		function testIsTrue() {
			$true = TimberHelper::is_true('true');
			$this->assertTrue($true);
			$false = TimberHelper::is_true('false');
			$this->assertFalse($false);
			$estelleGetty = TimberHelper::is_true('Estelle Getty');
			$this->assertTrue($estelleGetty);
		}

		function testIsEven() {
			$this->assertTrue(TimberHelper::iseven(2));
			$this->assertFalse(TimberHelper::iseven(7));
		}

		function testIsOdd() {
			$this->assertFalse(TimberHelper::isodd(2));
			$this->assertTrue(TimberHelper::isodd(7));
		}

		function testErrorLog() {
			ob_start();
			$this->assertTrue(TimberHelper::error_log('foo'));
			$this->assertTrue(TimberHelper::error_log(array('Dark Helmet', 'Barf')));
			$data = ob_get_flush();
		}

		function testOSort() {
			$michael = new stdClass();
			$michael->name = 'Michael';
			$michael->year = 1981;
			$lauren = new stdClass();
			$lauren->name = 'Lauren';
			$lauren->year = 1984;
			$boo = new stdClass();
			$boo->name = 'Robbie';
			$boo->year = 1989;
			$people = array($lauren, $michael, $boo);
			TimberHelper::osort($people, 'year');
			$this->assertEquals('Michael', $people[0]->name);
			$this->assertEquals('Lauren', $people[1]->name);
			$this->assertEquals('Robbie', $people[2]->name);
			$this->assertEquals(1984, $people[1]->year);
		}

		function testPaginateLinksWithTrailingSlash() {
			$args = array('total' => 20);
			$this->setPermalinkStructure('/%year%/%post_id%/');
			$pagination = \Timber\Pagination::paginate_links($args);
			foreach($pagination as $page) {
				if(array_key_exists('link', $page) && !empty($page['link'])) {
					$this->assertStringEndsWith('/', $page['link']);
				}
			}
		}

		function endsWith($string, $test) {
		    $strlen = strlen($string);
		    $testlen = strlen($test);
		    if ($testlen > $strlen) return false;
		    return substr_compare($string, $test, $strlen - $testlen, $testlen) === 0;
		}

		function testPaginateLinksWithOutTrailingSlash() {
			$args = array('total' => 20);
			$this->setPermalinkStructure('/%year%/%post_id%');
			$pagination = \Timber\Pagination::paginate_links($args);
			foreach($pagination as $page) {
				if(array_key_exists('link', $page) && !empty($page['link'])) {
					$this->assertFalse( self::endsWith(substr( $page['link'], - 1 ), '/') );
				}
			}
		}		

	}
