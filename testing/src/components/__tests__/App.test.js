import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there
  expect(div.innerHTML).toContain('Box for Comment');

  ReactDOM.unmountComponentAtNode(div);
});
