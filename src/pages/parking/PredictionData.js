let date = 1;

const predictionArray = [
  [
    63, 135, 201, 298, 387, 432, 487, 515, 498, 452, 489, 534, 521, 529, 503,
    457, 395, 276, 186,
  ],
  [
    63, 145, 231, 328, 407, 482, 514, 545, 531, 482, 513, 564, 551, 429, 413,
    357, 295, 176, 86,
  ],
];

const times = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

export const PredictionData = times.map((time, i) => {
  return {
    index: i + 1,
    time,
    prediction: predictionArray[date - 1][i],
  };
});
