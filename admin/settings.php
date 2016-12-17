<?php
/**
 * Objectiv Settings
 *
 * @package Objectiv\Admin
 * @author  Objectiv
 * @license GPL-2.0+
 * @link    http://objectiv.co
 */

class ObjectivSettings extends ObjectivAdmin {

    function __construct() {
        $page_id = 'objectiv';

		$menu_options = apply_filters(
			'obj_theme_settings_admin_options',
			array(
				'main_menu' => array(
					'sep' => array(
						'sep_position'   => '58.995',
						'sep_capability' => 'edit_theme_options',
					),
					'page_title' => 'Theme Settings',
					'menu_title' => 'Objectiv',
					'capability' => 'edit_theme_options',
					'position'   => '58.996',
                    'icon_url'  => 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDE3IDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+b2JqZWN0aXYtbWVudTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJvYmplY3Rpdi1tZW51IiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTcuMzI5MjIwMjcsNC42OTE0MDM1MSBDOS40ODMxOTM2Miw0LjY4OTU2MDY2IDExLjQyNTg5MTQsNS45ODYyNTIzNSAxMi4yNTA0MzA3LDcuOTc2MTYxNzggQzEzLjA3NDk3LDkuOTY2MDcxMjEgMTIuNjE4NzQ4MSwxMi4yNTY3Nzk3IDExLjA5NDczNjgsMTMuNzc4OTQ3NCBMMTQuMTUzMDc5OSwxNi44MzcyOTA0IEMxNy45MjE3OTM1LDEzLjA2ODU3NjggMTcuOTIxNzkzNSw2Ljk1ODI4NDc3IDE0LjE1MzA3OTksMy4xODk1NzExNSBDMTAuMzg0MzY2MywtMC41NzkxNDI0NjkgNC4yNzQwNzQyNCwtMC41NzkxNDI0NjkgMC41MDUzNjA2MjQsMy4xODk1NzExNSBMMy41NjM3MDM3LDYuMjQ3OTE0MjMgQzQuNTYxNzk2OTksNS4yNDg3NTM1NiA1LjkxNjk1MTA2LDQuNjg4NTg4MjIgNy4zMjkyMjAyNyw0LjY5MTQwMzUxIEw3LjMyOTIyMDI3LDQuNjkxNDAzNTEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjAwNzE5Mjk4LDEwLjAxMzQzMDggQzIuMDA1MzUwMTQsMTIuMTY3NDA0MSAzLjMwMjA0MTgyLDE0LjExMDEwMTkgNS4yOTE5NTEyNSwxNC45MzQ2NDEyIEM3LjI4MTg2MDY4LDE1Ljc1OTE4MDUgOS41NzI1NjkyMiwxNS4zMDI5NTg2IDExLjA5NDczNjgsMTMuNzc4OTQ3NCBMMy41NjczNDg5Myw2LjI1MTU1OTQ1IEMyLjU2Nzc0NzM1LDcuMjQ4MTYyMzIgMi4wMDYzMTM1OSw4LjYwMTg5OTc4IDIuMDA3MTkyOTgsMTAuMDEzNDMwOCBMMi4wMDcxOTI5OCwxMC4wMTM0MzA4IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
				)
			)
		);

        $this->create( $page_id, $menu_options );
    }
}
