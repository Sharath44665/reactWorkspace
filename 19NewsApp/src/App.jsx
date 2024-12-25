
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  Routes, Route
} from "react-router";


export default class App extends Component {
  c = "Sharath"
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize="6" countryName='us' category="general" />} />
          <Route path="/science" element={<News key="science" pageSize="6" countryName='us' category="science" />} />
          <Route path="/business" element={< News key="business" pageSize="6" countryName='us' category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize="6" countryName='us' category="entertainment" />} />
          <Route path="/general" element={<News key="general" pageSize="6" countryName='us' category="general" />} />
          <Route path="/health" element={<News key="health" pageSize="6" countryName='us' category="health" />} />
          <Route path="/sports" element={<News key="sports" pageSize="6" countryName='us' category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize="6" countryName='us' category="technology" />} />

        </Routes>
      </div>
    )
  }
}
