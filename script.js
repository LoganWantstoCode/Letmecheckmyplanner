    var timerInterval = setInterval(function () {
    var today = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('#currentDay').text(today);
    }, 1000);

    let saveBtn = $(".saveBtn");
$(function () {
    saveBtn.on('click', function() {
        let checkTime = $(this).siblings("textarea").val();
        let time = $(this).parent().attr("id")

    localStorage.setItem(time, checkTime);
  });
        function currentTime() {
            let currentHour = dayjs().format('H');

        $(".segment").each(function () {
            let segment = parseInt($(this).attr("id"));

            if (segment == currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else if (segment > currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            else {
                    $(this).removeClass("present");
                    $(this).removeClass("future");
                    $(this).addClass("past");
                }
            })
        }


        $("#01 textarea").val(localStorage.getItem("01"));
        $("#02 textarea").val(localStorage.getItem("02"));
        $("#03 textarea").val(localStorage.getItem("03"));
        $("#04 textarea").val(localStorage.getItem("04"));
        $("#05 textarea").val(localStorage.getItem("05"));
        $("#07 textarea").val(localStorage.getItem("07"));
        $("#08 textarea").val(localStorage.getItem("08"));
        $("#09 textarea").val(localStorage.getItem("09"));
        $("#10 textarea").val(localStorage.getItem("10"));
        $("#11 textarea").val(localStorage.getItem("11"));
        $("#12 textarea").val(localStorage.getItem("12"));

        currentTime();
        setInterval(current, 1000)
    });
