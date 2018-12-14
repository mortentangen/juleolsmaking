import React, { useState } from 'react';
import FilterPanelContent from './FilterPanelContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './FilterPanel.css';

const ArrowDown = <FontAwesomeIcon icon={faChevronDown} size="1x" />;
const ArrowUp = <FontAwesomeIcon icon={faChevronUp} size="1x" />;

const FilterPanel = () => {
  const [expand, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expand);

  return (
    <div>
      <div className={expand ? 'FilterPanel_expand' : 'FilterPanel_collapse'}>
        <FilterPanelContent />
      </div>
      <button className="FilterPanel_unstyledBtn" onClick={toggleExpand}>{expand ? ArrowUp : ArrowDown}</button>
    </div>
  );
};

export default FilterPanel;
