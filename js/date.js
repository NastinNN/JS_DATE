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

function task5() {
      let day;
      let mounth;
      let year;
      // Тут каждая составляющая даты вводится по отдельности и проверяется на корректность ввода
      while (true)
      {
            day=prompt("Введите день вашего рождения [1-31]");
            if (isNaN(day) || day<1 || day>31)
                  alert("Некорректный ввод. Попробуйте снова");
            else break;
      }
      while (true)
      {
            mounth=prompt("Введите месяц ващего рождения [1-12]");
            if (isNaN(mounth) || mounth<1 || mounth>12)
                  alert("Некорректный ввод. Попробуйте снова");
            else break;
      }
      while (true)
      {
            year=prompt("Введите год вашего рождения");
            if (isNaN(year) || year<1 || year>2023)
                  alert("Некорректный ввод. Попробуйте снова");
            else break;
      }
      let hpDay=new Date(year, mounth-1, day); /**минус в месяце, потому что в датах месяцы начинаются с нуля */
      let nowDate=new Date();
      let ageYear=nowDate.getFullYear()-hpDay.getFullYear();
      let ageMounth=nowDate.getMonth()-hpDay.getMonth();
      let ageDay=nowDate.getDate()-hpDay.getDate();
      // Проверка на то, был ли уже ДР в этому году (для получения точного возраста)
      if (new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()) < new Date(nowDate.getFullYear(), hpDay.getMonth(), hpDay.getDate()))
           ageYear--;
      if (ageDay < 0) {
            ageMounth--; /* Для получения более точного количества месяцев (потому что если др 11.6, а сегодня 10.11, то он выдаст 5 месяцев, а по факту прошло 4 мес и 30 д) */
            ageDay=31+ +ageDay;
      }
      if (ageMounth<0)
            ageMounth=12+ +ageMounth;
      // Здесь сделала в жвух вариантах, потому что не поняла, какой всё таки результат нужно получить :D
      console.log(`Ваш возраст в годах: ${ageYear}`);
      console.log(`Ваш возраст в месяцах ${ageYear*12+ ageMounth}`)
      console.log (`Ваш возраст в днях: ${Math.floor((nowDate-hpDay)/(1000*60*60*24))}`);
      console.log(`Ваш точный возраст: ${ageYear}г ${ageMounth}м ${ageDay}д`)
}

function task6() {
      let arr=[];
      let date=new Date();
      for (let i=0;i<12;i++)
      {
            let dataCheck=new Date(date.getFullYear(), i, 13);
            let dayweek=dataCheck.getDay(); 
            if (dayweek==5)
                  arr.push(dataCheck);
      }
      console.log(arr);
}