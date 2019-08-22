import React from 'react';
import { string } from 'prop-types';

const Emoji = ({ emoji, label }) => (
  <span role="img" aria-label={ label }>{ emoji }</span>
);

Emoji.propTypes = {
  emoji: string.isRequired,
  label: string.isRequired
};

export default Emoji;