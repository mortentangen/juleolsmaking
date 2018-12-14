import React from 'react';
import PropTypes from 'prop-types';
import './FilterPanel.css';

const isActive = active =>
  active
    ? 'FilterPanel_item'
    : 'FilterPanel_item FilterPanel_inactive';

const FilterPanel = ({
  filter,
  setMunnfolelse,
  setSmak,
  setEttersmak,
  setLukt
}) => {
  return (
    <div className="FilterPanel_container">
      <span className={isActive(filter.lukt)} onClick={setLukt}>
        Lukt
      </span>
      <span className={isActive(filter.munnfolelse)} onClick={setMunnfolelse}>
        Munnfølelse
      </span>
      <span className={isActive(filter.smak)} onClick={setSmak}>
        Smak
      </span>
      <span className={isActive(filter.ettersmak)} onClick={setEttersmak}>
        Ettersmak
      </span>
    </div>
  );
};

FilterPanel.prototype = {
  filter: PropTypes.shape({
    lukt: PropTypes.string.isRequired,
    munnfolelse: PropTypes.string.isRequired,
    smak: PropTypes.string.isRequired,
    ettersmak: PropTypes.string.isRequired
  }),
  setLukt: PropTypes.func.isRequired,
  setMunnfolelse: PropTypes.func.isRequired,
  setSmak: PropTypes.func.isRequired,
  setEttersmak: PropTypes.func.isRequired
};

export default FilterPanel;
