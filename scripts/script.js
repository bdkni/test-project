$( document ).ready(function() {
    // Слайдер
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Скролл к заказу
    $('.btn-to-cart').click((e) => {
        $('.order')[0].scrollIntoView( {behavior: "smooth"});
    })

    // Валидация формы
    $('#create-order').click(function () {
        let userName = $('#name');
        let userPhone = $('#phone');
        let hasError = false;
        $('.error-input').hide();

        if(!userName.val()) {
            userName.next().show();
            hasError = true;
        }
        if(!userPhone.val()) {
            userPhone.next().show();
            hasError = true;
        }
        if(!hasError) {
            alert("Спасибо за заказ!");
            $('.help-input').hide();
        }
        document.getElementById('my-form').reset();
    })

    $('.help-input').hide();
    $('.form-input').click(function () {
        $('.help-input').show();
    })

    $(function() {
        $(document).on("change keyup input click", "#phone", function() {
            if(this.value.match(/[^0-9]/g)){
                this.value = this.value.replace(/[^0-9]/g, "");
            };
        });
    });

    // Таймер
    window.addEventListener('load', event => {
        let numberOfMin = 30;  // желаемое время таймера в минутах (30 минут)
        let currentDate = new Date(); // получаем сегодняшнюю дату и время
        let deadlineTime = currentDate.setMinutes(currentDate.getMinutes() + 30); // устанавливаем таймер на 30 минут

        let countdown = setInterval(function() {
            let currentTime = new Date().getTime(); // текущее время
            let restOfTime = deadlineTime - currentTime; // находим различие между текущим моментом и временем дедлайна
            // преобразовываем значение миллисекунд в минуты и секунды
            let min = Math.floor( (restOfTime % (1000 * 60 * 60)) / (1000 * 60) );
            let sec = Math.floor( (restOfTime % (1000 * 60)) / 1000 );
            // если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            // отображаем результат таймера в элементе с id="deadline-timer"
            document.getElementById("deadline-timer").innerHTML = min + ":" + sec;
            // если в таймере остались только секунды, меняем слово "минуты" на "секунды"
            if (numberOfMin === 0) {
                document.getElementById("min-or-sec").innerHTML = "секунд";
            }
            // когда обратный отсчет закончился, отображаем соответствующее уведомление
            if (restOfTime < 0) {
                clearInterval(countdown);
                document.getElementById("time-remainer").innerHTML = "<h2>Время истекло!</h2>";
            }
        }, 1000);

    });
});










