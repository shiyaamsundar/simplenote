export const countWords = (str) => {
  if (str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");

    return str.split(" ").length;
  } else {
    return 0;
  }
};
