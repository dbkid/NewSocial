
export const CREATE_RESPONSE = "CREATE_RESPONSE";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export const createResponse = (response) => ({
  type: CREATE_RESPONSE,
  response: response
});

export const receiveResponse = (response) => ({
  type: RECEIVE_RESPONSE,
  response: response
});
