const order = time => new Promise((resolve) => setTimeout(resolve, time));

order(3000).then(() => console.log(3));
order(4000).then(() => console.log(4));
order(2000).then(() => console.log(2));
order(1000).then(() => console.log(1));