export function removeTags(inputString) {
 
  var stringWithoutTags = inputString.replace(/<\/?[^>]+(>|$)/g, ""); 
  var truncatedString = stringWithoutTags.substring(0, 40);
  if (stringWithoutTags.length > 40) {
    truncatedString += "...";
    }
  return truncatedString;
}

export function calculateEstimatedTimeForToday(data) {
  const today = new Date().toISOString().split("T")[0];
  const tasksForToday = data.filter((task) => task.start_date === today);
  let totalEstimatedTime = 0;
  tasksForToday.forEach((task) => {
    totalEstimatedTime += task.estimated_hours || 0;
  });

  return totalEstimatedTime;
}
export function calculatedNumberOfOperations(data) {
  const today = new Date().toISOString().split("T")[0]; 
  const tasksForToday = data.filter((task) => task.start_date === today);
  return tasksForToday.length || 0;
}