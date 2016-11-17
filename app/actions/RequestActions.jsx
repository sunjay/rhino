const Actions = require('./Actions');

export const ACTION_SEND_REQUEST = Actions.register('requests-send');

export const sendRequest = Actions.registerActionCreator(
  ACTION_SEND_REQUEST,
  /*
   * If more than one request with this id is made, the previous request will be aborted.
   * @returns {Function} Returns a thunk that runs the given functions
   *    in the following order:
   *    1. begin() (optional) - returns the action to be sent initially
   *    2. makeRequest(getState) - returns a thenable representing the request that was made
   *    3. success(response) (optional) - returns the action to be sent on success based on the response
   *    4. failure(error) (optional) - returns the action to be sent on failure
   */
  ({
    id,
    makeRequest,
    begin = () => {},
    success = () => {},
    failure = () => {},
  }) => {
    return (dispatch, getState) => {
      const maybeDispatch = (action) => action ? dispatch(action) : null;
      maybeDispatch(begin());

      const request = makeRequest(getState);

      dispatch(Actions.createAction(ACTION_SEND_REQUEST, {
        id,
        request,
      }));

      const requestNumber = getState().requests.getRequestNumber(id);
      return request.then((response) => {
        if (getState().requests.getRequestNumber(id) === requestNumber) {
          maybeDispatch(success(response));
        }
      }).catch((error) => {
        if (getState().requests.getRequestNumber(id) === requestNumber) {
          maybeDispatch(failure(error));
        }
      });
    };
  }
);
