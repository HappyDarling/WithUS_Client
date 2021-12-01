import SyncRequest from "sync-request";
require("dotenv");

const userSave = () => {
  return new Promise(function (resolve, reject) {
    var res = SyncRequest("POST", `${process.env.API_URL_UserSave}`, {
      email: sessionStorage.getItem("email"),
    });

    if (res.status == 200) {
      resolve(true);
    } else if (res.status == 401) {
      resolve(false);
    } else {
      resolve(false);
    }
  });
};

export { userSave };
