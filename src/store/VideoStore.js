import create from 'zustand';

const useVideoStore = create(set => ({
  videoData: [
    {
      title: 'Sundown',
      artist: 'Codema',
      linkID: '8r6INhZRNfU',
      label: 'Summer Melody',
    },
    {
      title: 'So Emotional',
      artist: 'Richard Bass',
      linkID: 'YOB8-Uf_rjQ',
      label: 'Emergent Shores',
    },
    {
      title: 'Rue Marceau',
      artist: 'Cosmaks & Druce',
      linkID: 'er-dzOyIEQE',
      label: 'Emergent Shores',
    },
    {
      title: 'Arisen',
      artist: 'Lesh',
      linkID: 'UkU70O2TQuw',
      label: 'Emergent Shores',
    },
    {
      title: 'Overlook',
      artist: 'Emro',
      linkID: 'vO3VWd1lTnQ',
      label: 'Soluna Music',
    },
    {
      title: 'Our Story',
      artist: 'Markus Hakala',
      linkID: 'Vnxa2JVy2RA',
      label: 'Emergent Shores',
    },
    {
      title: 'Apeiron',
      artist: 'Mark & Lukas Vs Haroun Chebbi',
      linkID: 'o_vpXZp3S84',
      label: 'Emergent Shores',
    },
    {
      title: 'Sixteen8',
      artist: 'Baatara',
      linkID: 'BqARfWxr80c',
      label: 'Emergent Shores',
    },
    {
      title: 'Summer Breeze',
      artist: 'Jason Pascascio',
      linkID: 'LAxld_LLMZY',
      label: 'Pineapple Digital',
    },
    {
      title: 'Let Go',
      artist: 'Emro',
      linkID: 'gaEJyLehHMs',
      label: 'Synth Collective',
    },
    {
      title: 'Foggy Morning',
      artist: 'Shingo Nakamura',
      linkID: 'A5z5UYfaxtQ',
      label: 'Monstercat',
    },
    {
      title: 'Z8phyr',
      artist: 'Twinkling Eyes',
      linkID: 'a5aGbuan550',
      label: '',
    },
    {
      title: 'Veeshy',
      artist: 'L.A. Calling',
      linkID: 'rSPMY4_7iMQ',
      label: 'Silk Music',
    },
    {
      title: 'Visnov',
      artist: 'Andrew Frenir',
      linkID: 'QtjxLjQ3sxQ',
      label: 'PHW',
    },
    {
      title: 'Blueshift',
      artist: 'Akihiro Ohtani',
      linkID: '4iocLPa9Ej0',
      label: 'Embers Melody',
    },
    {
      title: 'Wonderful Reasons',
      artist: 'Ruben Hadland',
      linkID: 'XjdCf9QpSBw',
      label: 'Emergent Shores',
    },
    {
      title: 'As It Was',
      artist: 'Surreal Self',
      linkID: 'MNjKHGXeh7g',
      label: 'Emergent Shores',
    },
    {
      title: 'Light On',
      artist: 'Matt Fax',
      linkID: '6HLQt1_l-eY',
      label: 'Colorize',
    },
  ],
  searchQuery: '',
  filteredVideoData: [],
  setSearchQuery: query => set({ searchQuery: query }),
  setFilteredVideoData: filteredData =>
    set({ filteredVideoData: filteredData }),
}));

export default useVideoStore;
