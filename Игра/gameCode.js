    var record = [];
    function isAnswer(q, event) {
        if (isNaN(event) || !isFinite(event)) {
          alert('Вы ввели недопустимый символ');
          return false;
        } else if (event < 1 || event > q) {
          alert('Ваше число выходит из допустимого диапазона');
          return false;
        } else {
          return true;
        }
      }



function isAnswer(arg1,arg2,arg3) {
  var ok = false;
  do {
    event = +prompt(arg1 + arg2 + arg3 + '-1 - Выход из игры');
      if (event == -1) {
        return -1;
        break;
      }
      else {
        ok = isAnswer(works.a0, event);
    }
  } while (!ok);
  switch (event) {
        case 1: record.push([arg1, arg2]);
           break;
        case 2: record.push([arg1, arg3]);
          break;
        case -1: record.push([arg1, "ВЫ вышли из игры"]);
          break;
}
return event;
}
switch (answer (works.a00, works.a1, works.a2)) {

        case 1: // Первое действие - если в первом окне ввели 1, то открываем серию окон - окно 2

   switch (answer (works.b00, works.b1, works.b2)) {
            case 1: // Второе действие, если во 2 окне ввели 1, то переходим на 4 окно
              
            case 2: // Второе действие, Если ввели 2, то также переходим на 4 окно
              answer(works.d00, worksd1, works.d2);
                break;
            case -1: // Второе действие
              break;
            default:
              alert('Ошибка');
          }
          break;
        
        case -1: // Первое действие
          break;
        default:
          alert('Ошибка');
      }
      alert('Спасибо за игру');

      console.log(record);
      var step = +prompt("Введите номер хода")
      console.log(step);
      var stepHistory ="В ходе № " + step + " " + record[step-1] [0] + "Ваш выбор " + record[step-1] [1];
      alert(stepHistory);

    
     