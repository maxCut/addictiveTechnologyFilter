$('.ytp-endscreen-content').remove();
var autoplayButton = $('.ytp-autonav-toggle-button')[0]
if(autoplayButton.getAttribute("aria-checked"))
{
    $('.ytp-autonav-toggle-button').click()
}