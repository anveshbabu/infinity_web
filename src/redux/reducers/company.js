import { CompanyType } from '../actionType';

const initialState = {
  companyDetails: {},
 
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case CompanyType.getCompanyDetails:
      return {
        ...state,
        companyDetails: payload,
      };
   
    default:
      return state;
  }
};
