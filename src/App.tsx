import React, { Fragment } from "react";
import { PublicRoutes } from "./routes/publlicRoutes";
import { notification } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";

export const SnackBarContext = React.createContext<NotificationInstance>();

function App() {
  const [api, contextHolder] = notification.useNotification();

  return (
    <SnackBarContext.Provider value={api}  >
      {contextHolder}
      <PublicRoutes />
    </SnackBarContext.Provider>
  );
}

export default App;
