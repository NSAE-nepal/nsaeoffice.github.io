export const formatDate = (
  date: Date | undefined,
  options: Intl.DateTimeFormatOptions = {}
) => {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    timeZone: "Asia/Kathmandu",
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  });
};

export const formatTime = (date: Date | undefined) => {
  if (!date) return "";
  return date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
