import React, { useState } from 'react';
import Story from './components/Story';  
import news_feed from './sample_news_stories.json'; 

function App() {
  
  const [stories, setStories] = useState(news_feed.results); 

  
  const removeStory = (id) => {
    setStories(stories.filter(story => story.id !== id));
  };

  return (
    <div className="App">
      <h1>News Stories</h1>
      <div className="stories-list">
        {stories.map(story => (
          <Story key={story.title} story={story} onRemove={removeStory} />
        ))}
      </div>
    </div>
  );
}

export default App;