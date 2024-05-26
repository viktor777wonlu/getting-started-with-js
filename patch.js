const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const uniqueArray = arr => [...new Set(arr)];