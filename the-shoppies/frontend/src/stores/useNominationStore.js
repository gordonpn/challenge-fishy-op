import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const useNominationStore = create((set, get) => ({
  nominations: new Map(),
  addNomination: (movie) => {
    const currentNominations = get().nominations;
    currentNominations.set(movie.imdbID, movie);
  },
  deleteNomination: (movie) => {
    const currentNominations = get().nominations;
    currentNominations.delete(movie.imdbID);
  },
  rerender: false,
  toggleRerender: () => set((state) => ({ rerender: !state.rerender })),
}));

export default useNominationStore;
