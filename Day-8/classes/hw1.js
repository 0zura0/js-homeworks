class Validator{
    isEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    isDomain(domain) {
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(domain);
      }
    isDate(dateString) {
        const dateObject = new Date(dateString);
        return !isNaN(dateObject) && dateObject.toString() !== "Invalid Date";
      }
    isPhone(phoneNumber) {
        // const phoneRegex = /^\+?[\d\s()-]+$/;
        const phoneRegex =/^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phoneNumber);
      }
}


var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country