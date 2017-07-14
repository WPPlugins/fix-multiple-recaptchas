function nf_grecaptcha_explicit_render(){
    jQuery('.g-recaptcha').each(function(){
        var sitekey = jQuery(this).data('sitekey');
        var id = grecaptcha.render(this, {
            'sitekey':sitekey,
            'callback':nf_grecaptcha_callback
        });

        jQuery(this).data('grecaptcha-widget-id', id);
    });
}

function nf_grecaptcha_callback(){
    jQuery('.g-recaptcha').each(function(){
        var widget_id = jQuery(this).data('grecaptcha-widget-id');
        var input = jQuery(this).prev();
        var response = grecaptcha.getResponse(widget_id);
        input.val(response);
    })
}