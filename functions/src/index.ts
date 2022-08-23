import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { getSystemjs } from "./mfe/get-systemjs";
import { getApplications } from "./mfe/get-applications";

admin.initializeApp();

// MFEs
export const getMfeSystemjs = functions.https.onRequest(getSystemjs);
export const getMfeApplications = functions.https.onRequest(getApplications);
