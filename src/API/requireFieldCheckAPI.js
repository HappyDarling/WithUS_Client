import SyncRequest from "sync-request";
require("dotenv");

const requireFieldCheck = (email) => {
  return new Promise(function (resolve, reject) {
    var res = SyncRequest(
      "POST",
      `${process.env.REACT_APP_Backend_Server_User}/${email}`
    );

    if (res.status === 200) {
      resolve(true);
    } else if (res.status === 400) {
      resolve(false);
    } else {
      reject(res);
    }
  });
};

export { requireFieldCheck };
