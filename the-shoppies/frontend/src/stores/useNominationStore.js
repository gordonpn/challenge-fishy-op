import create from "zustand";

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
