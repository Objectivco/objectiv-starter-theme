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
					'position'   => '2',
                    'icon_url'  => 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDE3IDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+b2JqZWN0aXYtbWVudTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJvYmplY3Rpdi1tZW51IiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTcuMzI5MjIwMjcsNC42OTE0MDM1MSBDOS40ODMxOTM2Miw0LjY4OTU2MDY2IDExLjQyNTg5MTQsNS45ODYyNTIzNSAxMi4yNTA0MzA3LDcuOTc2MTYxNzggQzEzLjA3NDk3LDkuOTY2MDcxMjEgMTIuNjE4NzQ4MSwxMi4yNTY3Nzk3IDExLjA5NDczNjgsMTMuNzc4OTQ3NCBMMTQuMTUzMDc5OSwxNi44MzcyOTA0IEMxNy45MjE3OTM1LDEzLjA2ODU3NjggMTcuOTIxNzkzNSw2Ljk1ODI4NDc3IDE0LjE1MzA3OTksMy4xODk1NzExNSBDMTAuMzg0MzY2MywtMC41NzkxNDI0NjkgNC4yNzQwNzQyNCwtMC41NzkxNDI0NjkgMC41MDUzNjA2MjQsMy4xODk1NzExNSBMMy41NjM3MDM3LDYuMjQ3OTE0MjMgQzQuNTYxNzk2OTksNS4yNDg3NTM1NiA1LjkxNjk1MTA2LDQuNjg4NTg4MjIgNy4zMjkyMjAyNyw0LjY5MTQwMzUxIEw3LjMyOTIyMDI3LDQuNjkxNDAzNTEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjAwNzE5Mjk4LDEwLjAxMzQzMDggQzIuMDA1MzUwMTQsMTIuMTY3NDA0MSAzLjMwMjA0MTgyLDE0LjExMDEwMTkgNS4yOTE5NTEyNSwxNC45MzQ2NDEyIEM3LjI4MTg2MDY4LDE1Ljc1OTE4MDUgOS41NzI1NjkyMiwxNS4zMDI5NTg2IDExLjA5NDczNjgsMTMuNzc4OTQ3NCBMMy41NjczNDg5Myw2LjI1MTU1OTQ1IEMyLjU2Nzc0NzM1LDcuMjQ4MTYyMzIgMi4wMDYzMTM1OSw4LjYwMTg5OTc4IDIuMDA3MTkyOTgsMTAuMDEzNDMwOCBMMi4wMDcxOTI5OCwxMC4wMTM0MzA4IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
				)
			)
		);

        $this->create( $page_id, $menu_options );
    }

    public function admin() {
        $active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'general';
        ?>
        <div class="obj-masthead">
            <div class="obj-masthead__container">
                <div class="obj-masthead__logo-container">
                    <a href="#" class="obj-mast-head__logo-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 69.08"><defs><style>.a{fill:#fff;}</style></defs><title>objectiv-wordmark-white-fill</title><path class="a" d="M81.5,17.31a19.44,19.44,0,0,0-8.06-1.86c-4.27,0-8.14,1.17-11.1,4.34V4H50.89V55h11V50.95H62c2,3.72,7,5.38,11,5.38,11.93,0,19.3-9.17,19.3-20.68C92.25,27.72,88.87,20.75,81.5,17.31ZM71.22,45.64c-5.58,0-9.31-4.41-9.31-9.86a9.45,9.45,0,1,1,18.89.07A9.52,9.52,0,0,1,71.22,45.64Z"/><path class="a" d="M98.81,53.74c0,3-.21,5.79-4.07,5.79H93.22v9.55h2.83c11.17,0,14.2-4.34,14.2-14.89V16.75H98.81Z"/><path class="a" d="M137.07,15.44C125.83,15.44,117,24.89,117,36a20.3,20.3,0,0,0,20.27,20.27c8.62,0,15.37-5.58,18.68-13.24H144.24a8.21,8.21,0,0,1-7,3.59c-4.48,0-8.27-2.69-9-7.24H157a15,15,0,0,0,.28-3C157.27,24.82,148.79,15.44,137.07,15.44Zm-8.62,16.2c.9-4.14,4.55-6.55,8.69-6.55s7.79,2.41,8.69,6.55Z"/><path class="a" d="M182.37,45.57c-5.58,0-9.1-4.34-9.1-9.72,0-5.17,3.31-9.72,8.82-9.72a8.81,8.81,0,0,1,8.55,5.38h11.58c-2-9.72-10.48-16.06-20.27-16.06a20.08,20.08,0,0,0-20.2,20.34,20.55,20.55,0,0,0,40.54,4.69H190.64A8.8,8.8,0,0,1,182.37,45.57Z"/><polygon class="a" points="222.29 4 210.85 4 210.85 16.75 205.2 16.75 205.2 25.76 210.85 25.76 210.85 55.02 222.29 55.02 222.29 25.76 227.81 25.76 227.81 16.75 222.29 16.75 222.29 4"/><rect class="a" x="232.78" y="16.75" width="11.44" height="38.26"/><polygon class="a" points="276.14 16.75 268.83 40.61 268.7 40.61 261.39 16.75 249.53 16.75 263.25 55.02 274.21 55.02 288 16.75 276.14 16.75"/><circle class="a" cx="104.53" cy="6.45" r="6.45"/><circle class="a" cx="238.5" cy="6.45" r="6.45"/><path class="a" d="M18.72,3A26.39,26.39,0,0,0,0,10.79l8.39,8.39A14.6,14.6,0,1,1,29,39.83l8.39,8.39A26.47,26.47,0,0,0,18.72,3Z"/><path class="a" d="M4.12,29.51A14.6,14.6,0,0,0,29,39.83L8.39,19.18A14.56,14.56,0,0,0,4.12,29.51Z"/></svg>
                    </a>
                </div>
                <ul class="obj-masthead__links">
                    <li class="obj-masthead__links-li"><a href="#">Need Help?</a></li>
                </ul>
            </div>
        </div>
        <div class="obj-nav">
            <div class="obj-nav__panel">
                <div class="obj-nav-group">
                    <div class="obj-nav-tabs">
                        <ul class="obj-nav-tabs__list">
                            <li class="obj-nav-tabs__list-li"><a href="?page=objectiv&tab=general" class="<?php echo $active_tab == 'general' ? 'is-current-tab' : ''; ?>">General</a></li>
                            <li class="obj-nav-tabs__list-li"><a href="?page=objectiv&tab=seo" class="<?php echo $active_tab == 'seo' ? 'is-current-tab' : ''; ?>">SEO</a></li>
                            <li class="obj-nav-tabs__list-li"><a href="?page=objectiv&tab=analytics" class="<?php echo $active_tab == 'analytics' ? 'is-current-tab' : ''; ?>">Analytics</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="obj-body">
            <div class="obj-body__container">
                <?php
                if ( $active_tab == 'general' ) {
                    echo 'general';
                } else if ( $active_tab == 'seo' ) {
                    echo 'seo';
                } else if ( $active_tab == 'analytics' ){
                    echo 'analytics';
                }
                ?>
            </div>
        </div>
        <?php
    }
}
