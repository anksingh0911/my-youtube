export const getNumber = (num) =>{
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(Math.log10(num) / 3);
  const formattedNumber = num / (1000 ** suffixNum);
  return formattedNumber.toFixed(2) + suffixes[suffixNum];
}