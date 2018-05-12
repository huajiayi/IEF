var $loginInput = $("input");
var $text = $("span");
var $line = $(".line");
var $btn = $("button");

$loginInput.each(function(i) {
    $(this).focus(function() {
        $text.eq(i).addClass("move-up");
        $line.eq(i).removeClass("hide-line");
        $line.eq(i).css("display", "block");
    }).blur(function() {
        var spanValue = $(this).val();
        if(spanValue === "") {
            $text.eq(i).removeClass("move-up");
        }
        $line.eq(i).addClass("hide-line");
        // 如果 Email 和 Password 都填充了内容，为 Submit 按钮添加动画
        var emailValue = $loginInput.eq(0).val();
        var passwordValue = $loginInput.eq(1).val();
        if(emailValue !== "" && passwordValue !== "") {
            $btn.addClass("animated infinite pulse");
        }else {
            $btn.removeClass("animated infinite pulse");
        }
    });
});