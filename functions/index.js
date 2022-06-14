const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const database = admin.firestore();

exports.sendNotification = functions.https.onCall((data, context) => {
    // console.log('Params:');

    const payload = {
        token: data.token,
        notification: {
          title: "Transaction Completed",
          body: "Add RS " +data.amount+" to your account",
        },
        data: {
          body: "Add RS " +data.amount+" to your account",
        },
    };
    admin.messaging().send(payload).
                              then((response) => {
                                  console.log("Successfully sent message:",
                                    response);
                                    return  {success: true};
                              }).catch((error) => {
                                return {error: error.code};
                              });
  
    // return {
    //     output: "the firebase function has been run"
    //   }
});


exports.sendNotificationPurchase = functions.https.onCall((data, context) => {
  // console.log('Params:');

  const payload = {
      token: data.token,
      notification: {
        title: "Transaction Completed",
        body: "Reduce RS " +data.amount+" from your account",
      },
      data: {
        body: "Reduce RS " +data.amount+" from your account",
      },
  };
  admin.messaging().send(payload).
                            then((response) => {
                                console.log("Successfully sent message:",
                                  response);
                                  return   {success: true};
                            }).catch((error) => {
                              return {error: error.code};
                            });

  // return {
  //     output: "the firebase function has been run"
  //   }
});

exports.sendNotificationGoldRate = functions.https.onCall((data, context) => {

  const query = database.collection("user")
    .get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => { 
        const token = doc.data()["token"];
        if (token !== "") {
          const payload = {
            token: token,
            notification: {
              title: "Today 's Gold Rate",
              body: "Today's Gold Rate " + data.pavan,
            },
            data: {
              body: "Today's Gold Rate " + data.pavan,
            },
          };

          admin.messaging().send(payload).
          then((response) => {
            console.log("Successfully sent message:",
                response);
            return {success: true};
          }).catch((error) => {
            return {error: error.code};
          });
        }
      })
    });

});