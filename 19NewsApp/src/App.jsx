
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  Routes, Route
} from "react-router";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = import.meta.env.VITE_API_MY_NEWS_API_KEY
  const [progress, setProgress] = useState(0)

  // setProgress(progress)

  return (
    <div>
      <LoadingBar
        color="#f11946"
        height={5}
        progress={progress}

      />
      <NavBar />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize="6" countryName='us' category="general" />} />
        <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize="6" countryName='us' category="science" />} />
        <Route path="/business" element={< News setProgress={setProgress} apiKey={apiKey} key="business" pageSize="6" countryName='us' category="business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize="6" countryName='us' category="entertainment" />} />
        <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize="6" countryName='us' category="general" />} />
        <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize="6" countryName='us' category="health" />} />
        <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize="6" countryName='us' category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize="6" countryName='us' category="technology" />} />

      </Routes>
    </div>
  )

}
export default App;