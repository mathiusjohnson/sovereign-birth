const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_SERVICE = "SET_SERVICE";
// REDUCER INCLUDES SETTING POINTS
export default function reducer(state, action) {
  switch (action.type) {

    case SET_APPLICATION_DATA:
      const {
        businessData
      } = action;

      return {
        ...state,
        businessData
      };

      case SET_SERVICE: {
        const { updatedService } = action;


        console.log("from reducer edit post");
        // const { text, post_id } = action;
        //console.log("WTF?");
        const removedState = state.businessData.map((service) => {
          if (service.id === updatedService.serviceId) {
            service.text_body = updatedService.text_body;
            service.title = updatedService.title;
          }
          return service;
        });
        console.log("from reducer", removedState);
        state = { ...state, businessData: removedState };

        console.log('state:', state.businessData);

        return state;
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export {
  SET_APPLICATION_DATA, SET_SERVICE
};
