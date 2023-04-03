import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, currentFilter) => {
    console.log('selectFilteredContacts');

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(currentFilter)
    );
  }
);
