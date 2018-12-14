import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './Toggle.css';

const ArrowDown = <FontAwesomeIcon icon={faChevronDown} size="1x" />;
const ArrowUp = <FontAwesomeIcon icon={faChevronUp} size="1x" />;

const Toggle = ({ children }) => {
  const [expand, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expand);

  return (
    <div>
      <div className={expand ? 'Toggle_expand' : 'Toggle_collapse'}>
        {children}
      </div>
      <button className="Toggle_unstyledBtn" onClick={toggleExpand}>
        {expand ? ArrowUp : ArrowDown}
      </button>
    </div>
  );
};

export default Toggle;
