function titleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
  }
  console.log(titleCase("I'm a little tea pot")); 
  console.log(titleCase("sHoRt AnD sToUt"));