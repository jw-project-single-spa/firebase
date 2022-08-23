import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const getSystemjs = async (
  _: functions.https.Request,
  response: functions.Response<unknown>
) => {
  response.set("Access-Control-Allow-Origin", "*");
  const collection = admin.firestore().collection("mfes");

  const list = await collection.get();
  const result: Record<string, string> = {};
  list.forEach((l) => {
    const { name, url } = l.data();
    result[`@jw-project/${name}`] = url;
  });
  response.send({ imports: result });
};
