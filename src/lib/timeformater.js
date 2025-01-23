export const timeformatChange = (t) => {
  var timing = parseInt(t, 10);

  if (timing === 0) {
    return `12 AM`;
  } else if (timing === 12) {
    return `12 PM`;
  } else if (timing > 12) {
    timing = timing - 12;
    return `${timing} PM`;
  } else {
    return `${timing} AM`;
  }
};
