function task1() {
      let data=new Date();
      dat(data);

      function dat(data) {
            let den=["Воскресенье","Понедельник", "Вторник", "Среда","Четверг", "Пятница", "Суббота"];
            let num=data.getDay();
            let day=den[num];
            console.log(`Текущий день недели: ${day}`);
      }
}

function task2() {
      let data=new Date();
      let dataNY=new Date("January 1, 2024");
      let koldayNY=(dataNY-data)/1000/60/60/24;
      console.log(`До нового года осталось ${koldayNY.toFixed(0)} дня`)
}

function task4() {
      let ms=prompt("Введите количество милисекунд");
      if(Number.isInteger(ms) || ms<0 || isNaN(ms))
        alert("Некорректный ввод данных");
      else 
      {
      let day=Math.floor(+ms /(1000*60*60*24));
      let hour=Math.floor((+ms -(day*1000*60*60*24))/(1000*60*60));
      let minute=Math.floor((+ms -(day*1000*60*60*24)-(hour*1000*60*60))/(1000*60));
      let second=Math.floor((+ms -(day*1000*60*60*24)-(hour*1000*60*60)-(minute*1000*60))/1000);
      let dataObj={
            d: day,
            h: hour,
            m: minute,
            s: second,
            }
      console.log(dataObj);
      }
}

