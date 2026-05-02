export const fetchNotifications = async () => {
  console.log("🔥 SERVICE RUNNING (NO API)");

  return [
    {
      id: 1,
      title: "Demo Notification",
      message: "Backend working successfully",
    },
    {
      id: 2,
      title: "System Ready",
      message: "Logging + API flow confirmed",
    },
  ];
};
