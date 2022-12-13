import { apiSlice } from "../../app/api/apiSlice";

import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const testAdapter = createEntityAdapter();
const initialState = testAdapter.getInitialState();

const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => ({
        url: "/protect",
        method: "GET",
      }),
      invalidatesTags: ["Data"],
      transformResponse: (responseData) => {
        return testAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useGetTestQuery } = testApiSlice;
export const selectTestResult = testApiSlice.endpoints.getTest.select();

const selectNotesData = createSelector(
  selectTestResult,
  (testResult) => testResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds,
  // Pass in a selector that returns the notes slice of state
} = testAdapter.getSelectors((state) => selectNotesData(state) ?? initialState);
