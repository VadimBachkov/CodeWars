let Ghost = function() {
    let colors = ["white", "yellow", "purple", "red"];
      let colorIndex = Math.floor(Math.random() * (colors.length));
      this.color = colors[colorIndex];
  };