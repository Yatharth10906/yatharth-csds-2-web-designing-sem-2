const myPromise = new Promise((resolve, reject) => {
    let age = 20;
    if (age > 18) {
        resolve("Eligible")
    } else {
        reject("not")
    }
});
const checkWorkeligibility = async () => {
    const response = await myPromise;
    console.log(response)
}
checkWorkeligibility();
