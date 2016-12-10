$(document).ready(function() {
$('.tab-content li[id != "tab1"]').hide();


//$('.tab-content first').show();
//$('.tab-menu li:first').addClass('active');

$('.tab-menu li').click(function() {
$('.tab-content li').hide();
$($(this).find('a').attr('href')).fadeIn();
$(this).addClass('active');
//$($(this).attr("href")).show();


//$('.tab-menu li').removeClass('active');

//$('.tab-content').hide();

return false;
});
});
