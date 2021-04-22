function waterSize(size) {
  //Sets the size of the regulation circle for each body of water
  console.log("Lake Size", size)
  switch (size) {
    case 'Large':
      return 4000;
    case 'Medium':
      return 3000;
    case 'Small':
      return 500;
    case 'X-small':
      return 250;
    default:
      return 500;
  }
}
function regulationColor(color) {
  switch (color) {
    case 'YELLOW':
      return '#fce45b';
    case 'RED':
      return '#d44c5f';
    default:
      return '#3a88c5';
  }
}

export { regulationColor, waterSize }