const msg = (count) => {
  return new Promise((resolve, reject) => {
    if (count >0) {
      setTimeout(() => {
        const heading = document.querySelector("h1");
        heading.innerText = count;
        resolve(count);
      }, 1000);
    } else {
       const heading = document.querySelector("h1");       
       heading.innerText = "Happy Independence Day";

    }
  });
};

msg(5)
.then((n) => msg(--n))
.then((n) => msg(--n))
.then((n) => msg(--n))
.then((n) => msg(--n))
.then((n) => msg(--n))
