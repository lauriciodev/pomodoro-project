interface dataLc {
   cicles: number;
   timeStudy: number;
}


export const saveToLc = (value: dataLc) => {
   window.localStorage.setItem("databseLc", JSON.stringify(value))
}

export const getToLc = () => {
   const result = JSON.parse(String(window.localStorage.getItem("databaseLc")));
   return result;

}
