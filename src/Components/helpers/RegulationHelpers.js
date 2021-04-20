export default function waterSize(size) {
  //Sets the size of the regulation circle for each body of water
  switch (size) {
    case 'Large':
      return 2000;
    case 'Medium':
      return 1000;
    case 'Small':
      return 500;
    case 'X-small':
      return 250;
    default:
      return 750;
  }
}