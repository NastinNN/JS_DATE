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