import { ActionTypes } from "@src/features/App/AppConstants";

export const actionCreators = {
    loadBanners: (reload = false) => ({ type: ActionTypes.FETCH_BANNERS, reload }),
}

