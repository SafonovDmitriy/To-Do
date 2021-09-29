/* eslint-disable no-unused-vars */
import { get } from "lodash";
export const userLoadingSelector = (state) => state.user.loading;
export const isUserSelector = (state) => !!Object.keys(state.user.data).length;
export const userSelector = (state) => state.user.data;
