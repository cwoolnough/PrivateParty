import { AsyncStorage } from "react-native";
import { TRY_AUTH, AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from './actionTypes';
import { uiStartLoading, uiStopLoading } from "./index" 
import startMainTabs from "../../screens/MainTabs/startMainTabs";
import App from "../../../App";

const API_KEY = "AIzaSyBn9cv3PNvJpd15fMR6gpYfXCqPRjZWE1U"

export const tryAuth = (authData, authMode) => {
    return dispatch => {
        dispatch(uiStartLoading());
        let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + API_KEY;
        if (authMode === "signup") {
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + API_KEY
        }
        fetch(
            url,
            {
                method: "POST",
                body: JSON.stringify({
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .catch(err => {
                console.log(err);
                alert("Authentication failed, please try again!");
                dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                dispatch(uiStopLoading());
                console.log(parsedRes);
                if (!parsedRes.idToken) {
                    alert("Authentication failed, please try again!");
                } else {
                    dispatch(authStoreToken(parsedRes.idToken, parsedRes.expiresIn, parsedRes.refreshToken));
                    startMainTabs();
                }
            });
    };
};

export const authStoreToken = (token, expiresIn, refreshToken) => {
    return dispatch => {
        dispatch(authSetToken(token));
        const now = new Date();
        const expiryDate = now.getTime() + expiresIn * 1000;
        AsyncStorage.setItem("pp:auth:token", token);
        AsyncStorage.setItem("pp:auth:expiryDate", expiryDate.toString());
        AsyncStorage.setItem("pp:auth:refreshToken", refreshToken)
    };
};

export const authSetToken = token => {
    return {
        type: AUTH_SET_TOKEN,
        token: token
    };
};

export const authGetToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            const token = getState().auth.token;
            if (!token) {
                let fetchedToken;
                AsyncStorage.getItem("pp:auth:token")
                    .catch(err => reject())
                    .then(tokenFromStorage => {
                        fetchedToken = tokenFromStorage;
                        if (!tokenFromStorage) {
                            reject();
                            return;
                        }
                        return AsyncStorage.getItem("pp:auth:expiryDate");  
                    })
                    .then(expiryDate => {
                        const parsedExpiryDate = new Date(parseInt(expiryDate));
                        const now = new Date();
                        if (parsedExpiryDate > now) {
                            dispatch(authSetToken(fetchedToken));
                            resolve(fetchedToken);
                        } else {
                            reject();
                        }     
                    })
                    .catch(err => reject())
            } else {
                resolve(token);
            }
        });
        return promise
            .catch(err => {
            return AsyncStorage.getItem("pp:auth:refreshToken")
                .then(refreshToken => {
                    return fetch("https://securetoken.googleapis.com/v1/token?key=" + API_KEY, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded" 
                        },
                        body: "grant_type=refresh_token&refresh_token=" + refreshToken
                    });
                })
                .then(res => res.json())
                .then(parsedRes => {
                    if (parsedRes.id_token) {
                        console.log("Refresh token worked")
                        dispatch(authStoreToken(
                            parsedRes.id_token, 
                            parsedRes.expires_in, 
                            parsedRes.refresh_token
                        )
                    );
                    return parsedRes.id_token;
                    } else  {
                        dispatch(authClearStorage());
                    }
                });
        })
        .then(token => {
            if (!token) {
                throw new Error();
            } else {
                return token;
            }
        })
    };
};

export const authAutoSignIn = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        startMainTabs();
      })
      .catch(err => console.log("Failed to fetch token"));
  };
};

export const authClearStorage = () => {
  return dispatch => {
    AsyncStorage.removeItem("pp:auth:token");
    AsyncStorage.removeItem("pp:auth:expiryDate");
    return AsyncStorage.removeItem("pp:auth:refreshToken");
  };
};

export const authLogout = () => {
  return dispatch => {
    dispatch(authClearStorage()).then(() => {
      App();
    });
    dispatch(authRemoveToken());
  };
};

export const authRemoveToken = () => {
    return {
        type: AUTH_REMOVE_TOKEN
    };
};
