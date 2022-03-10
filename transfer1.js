import {getFunction,setFunction} from "./infomodule.js";
console.log("subject name form infomodule:");
console.log(getFunction());
console.log("subject name in transfer1 file:");
setFunction("transportation system");
console.log(getFunction());
