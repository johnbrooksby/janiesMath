const findNums = () => {
  for (let smallest = 0; smallest < 25; smallest++) {
    let middle = smallest + 3;
    let largest = smallest * 2;
    if (smallest + middle + largest === 75) {
      console.log("smallest:", smallest);
      console.log("middle:", middle);
      console.log("largest:", largest);
    }
  }
};

// findNums()

const findTiles = () => {
  for (let beige = 0; beige < 150; beige++) {
    let red = beige + 25;
    let blue = beige * 3;
    if (beige + red + blue === 435) {
      console.log("beige:", beige);
      console.log("red:", red);
      console.log("blue:", blue);
    }
  }
};

findTiles()
