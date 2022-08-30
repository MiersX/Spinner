const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let n = 100;

for (const element of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(element);
  }, n += 200);
};