import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const getTopEntryKey = (obj) => (
  Object.entries(obj).reduce((top, curr) => curr[1] > top[1] ? curr : top)[0]
)

const formatPercentage = (val) => `${Math.round(val * 100)}%`;

const CATEGORY_LIST = ['race', 'age', 'gender'];

function Demographic() {
  const { state } = useLocation();
  const { age = {}, gender = {}, race = {} } = state?.demographicData || {};
  

  const [selectedCategory, setSelectedCategory] = useState("race");

  const [selectedKey, setSelectedKey] = useState({
    race: getTopEntryKey(race),
    age: getTopEntryKey(age),
    gender: getTopEntryKey(gender)
  });

  const dataMap = useMemo(() => ({ race, age, gender }), [race, age, gender]);
  const selectedData = dataMap[selectedCategory];
  const selectedValue = selectedData[selectedKey[selectedCategory]] ?? 0;


  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
    const topKey = getTopEntryKey(dataMap[category])
    setSelectedKey(prev => ({ ...prev, [category]: topKey }))
  };

  const handleOptionClick = (key) => {
    setSelectedKey((prev) => ({
      ...prev,
      [selectedCategory]: key,
    }));
  };

  useEffect(() => {
  const topKey = getTopEntryKey(dataMap[selectedCategory]);
  setSelectedKey(prev => ({ ...prev, [selectedCategory]: topKey }));
  }, [dataMap, selectedCategory]);

  return (
    <div className='Demographics_box'>
      <div className='Analysis_results'>
        {CATEGORY_LIST.map((category) => (
          <div key={category} className={`${category}_results ${selectedCategory === category ? 'selected' : ''}`} onClick={() => handleCategoryClick(category)}>
            <div className={`${category}_rectangle`}>
              <div className={category}>{selectedKey[category]}</div>
              <div className={`${category}_text`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='Demographics_rectangle_results'>
        <div className='Demographics_rectangle_box'>
          <div className='Demographics_rectangle_title'>{selectedKey[selectedCategory]}</div>
            <div className='progress-ring-container'>
              <svg className="progress-ring">
                <circle className="progress-ring__background" stroke="#C1C2C3" strokeWidth="6" fill="transparent" r="190" cx="192" cy="192"/>
                <circle className="progress-ring__circle" stroke="#1A1B1C" strokeWidth="6" fill="transparent" r="190" cx="192" cy="192"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 190}`,
                    strokeDashoffset: `${2 * Math.PI * 190 * (1 - selectedValue)}`,
                    transition: 'stroke-dashoffset 1s ease-out',
                  }}
                />
              </svg>
              <div className='Graph'>
                <div className='Demographics_graph_results '>
                  <div className='Demographics_graph_results_text'>
                    {formatPercentage(selectedValue)}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='confidence_results'>
        <div className='confidence_box'>
          <div className='confidence_tag_box'>
            <div className='confidence_catagory'>{selectedCategory}</div>
            <div className='aiConfidence_text'>a. i. confidence</div>
          </div>
          <div className='confidence_tag'>
          {Object.entries(selectedData)
          .sort(([a], [b]) => {
            const getStart = (range) => parseInt(range.split('-')[0]) || 0;
            return getStart(a) - getStart(b)
          })
          .map(([key, value]) => {
            const isSelected = key === selectedKey[selectedCategory]
            return (
            <div key={key} className={`confidence-row ${isSelected ? 'selected' : ''}`} onClick={() => handleOptionClick(key)}>
              <div>
                <img src={isSelected ? '/selected-button.png' :'/nonselected-button.png'} alt={isSelected ? 'selected' :'non selected'} />
                <span className='confidence_text'> {key}</span>
              </div>
              <span>{formatPercentage(value)}</span>
            </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographic