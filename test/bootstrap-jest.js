if (!process.env.LOG) {
  console.log = jest.fn();
  console.info = jest.fn();
}