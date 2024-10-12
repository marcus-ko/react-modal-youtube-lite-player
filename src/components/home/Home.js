import { useState, useEffect } from 'react';
import './Home.scss';
import Hero from './Hero';
import Card from '../card/Card';
import TopTenList from '../home/TopTenList';
import useVideoStore from '../../store/VideoStore';
import Search from '../search/Search';
import Footer from '../home/Footer';

// import Header from '../Home/Header'
// import Card2 from '../Card2/Card2'
// import Footer from '../Home/Footer'

const Home = () => {
  // Get state and state setter functions from the Zustand store
  const {
    videoData,
    searchQuery,
    filteredVideoData,
    setSearchQuery,
    setFilteredVideoData,
  } = useVideoStore();

  // Create a separate state for the search input
  const [searchInput, setSearchInput] = useState('');

  // Create a separate state for the TopTenList data
  const [topTenData, setTopTenData] = useState([]);

  // Moved to Store
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredVideoData, setFilteredVideoData] = useState(videoData);

  // Update the TopTenList data whenever filteredVideoData changes
  useEffect(() => {
    setTopTenData(videoData); // Set it back to unfiltered data
  }, [videoData]);

  // Update filtered video data whenever searchQuery changes
  useEffect(() => {
    const filteredData = videoData.filter(
      video =>
        video.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        video.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
        video.label.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredVideoData(filteredData);
  }, [searchInput, videoData, setFilteredVideoData]);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value); // Update searchQuery in your store
  };
  return (
    <div>
      <div className="container">
        {/* <Nav /> */}
        {/* <VideoPlayer /> */}
        <h1>Featured Tracks</h1>
        <div className="flex row hero_wrapper">
          <div className="col col-left">
            <Hero />
          </div>
          <div className="col col-right">
            {/* Pass filteredVideoData to TopTenList component */}
            <TopTenList filteredVideoData={topTenData} />
          </div>
        </div>

        <h2 className="main-content-title marginTop100">Progressive House Top 50</h2>
        <Search
          searchInput={searchInput}
          handleInputChange={handleInputChange}
        />

        <Card videoData={searchQuery ? filteredVideoData : videoData} />

        {/* <VideoList />  Works but unable to set search criteria to find suitable tracks */}
        {/* <Header titles={titles}/>
      <Card2 projects={projects} /> */}
        {/* <Footer /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
