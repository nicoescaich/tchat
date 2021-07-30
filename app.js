$(window).on("load", function() {
    $("#send-btn").on("click", function() {
        $value = $("#data").val();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>' + $value + '</p></div></div>';
        $(".form").append($msg);
        $("#data").val('');

        $.ajax({
            url: 'message.php',
            type: 'POST',
            data: 'text=' + $value,
            success: function(result) {
                $replay = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"aria-hidden="true"></i></div><div class="msg-header"><p>' +
                    result + '</p></div>';
                $(".form").append($replay);
                $(".form").scrollTop($(".form")[0].scrollHeight);
            }
        })

    })

});