import React from 'react';

const Story = ({ story, onRemove }) => {
  const placeholderImage = 'https://placehold.co/300x200';

  return (
    <div className="story">
      <span className="title" onClick={() => onRemove(story.title)}>x</span>
      <div className="story_header">
        <div className="story_image">
          <img src={story.image_url || placeholderImage} alt={story.title} />
        </div>
        <div>
          <h1>
            <a href={story.link} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h1>
          <span className="story_creator"><strong>Creator:</strong> {story.creator || 'Unknown'}</span>
        </div>
      </div>
      <p>{story.description}</p>
    </div>
  );
};

export default Story;