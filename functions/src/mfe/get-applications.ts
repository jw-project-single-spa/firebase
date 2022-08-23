import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const getApplications = async (
  _: functions.https.Request,
  response: functions.Response<unknown>
) => {
  response.set("Access-Control-Allow-Origin", "*");
  const collection = admin.firestore().collection("mfes");

  const list = await collection.where("isParcel", "==", false).get();
  response.send(
    list.docs.map((mfe) => ({
      ...mfe.data(),
      name: `@jw-project/${mfe.data().name}`,
    }))
  );
};
