<div class="obj-masthead">
    <div class="obj-masthead__container">
        <div class="obj-masthead__logo-container">
            <a href="#" class="obj-mast-head__logo-link">
                Objectiv
            </a>
        </div>
        <ul class="obj-masthead__links">
            <li class="obj-masthead__links-li"><a href="#">Need Help?</a></li>
        </ul>
    </div>
</div>
<div class="obj-body">
    <div class="obj-body__container">
        <form method="post" action="options.php">
            <div class="obj-body__section">
                <?php settings_fields( 'objectiv_settings' ); ?>
                <?php do_settings_sections( 'objectiv_settings' ); ?>
            </div>
            <div class="obj-body__footer">
                <?php submit_button( 'Save Options', 'primary', 'submit', false ); ?>
            </div>
        </form>
    </div>
</div>
<div class="obj-footer">
    <div class="obj-footer__container">
        <div class="obj-footer__image">
            <img src="<?php echo PARENT_THEME_ADMIN_IMAGES_DIR . '2016_headshots_Erik.jpg'; ?>" />
        </div>
        <div class="obj-footer__content">
            <h4 class="obj-footer__header">Need Help? We are one email away.</h4>
            <p class="obj-footer__description">We won't ever leave you in the lurch. If you have a question or found a bug with your website, please let us know.</p>
            <p class="obj-footer__description">
                <a href="http://objectiv.co/contact" title="Go to Objectiv Support" class="button button-primary">Contact Us</a>
            </p>
        </div>
    </div>
</div>