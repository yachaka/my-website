
import React from 'react'

const techsToColors = {
  'React': '#6CDAF7',
  'Apollo': '#290ba0',
  'GraphQL': '#DC2396',
  'AWS': '#E88F44',
  'Redux': '#7652B6',
  'Webpack': '#2974AF',
  'iOS/Swift': '#F97F51',
  'Android/Java': '#1970AE',
  'RelayJS': '#EE6B2E',
  'Node.js': '#87C944',
  'React-Native': '#6CDBF7',
}

const style = { color: 'black' };
export const getTextForTechno = (techno) => <span style={style}>{techno}</span> // techsToColors[techno]