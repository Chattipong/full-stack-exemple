// const requestNotificationPermission = async () => {
const permission = window.Notification.requestPermission();
console.log(permission);
// value of permission can be 'granted', 'default', 'denied'
// granted: user has accepted the request
// default: user has dismissed the notification permission popup by clicking on x
// denied: user has denied the request.
if (permission !== "granted") {
  throw new Error("Permission not granted for Notification");
}
// }
