import React from 'react';
import { GridGenerator, Hexagon, HexGrid, Layout, Text } from 'react-hexgrid';

const hexagonSize = { x: 7, y: 7 };
const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);

function HexaGrid(props) {
  const { data } = props;

  return (

    <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
      {/* Main grid with bit hexagons, all manual */}
      <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
        {data.map((hexa) => {
          const name = hexa.name;
          const coordinate = hexa.coordinates;
          const q = Number(coordinate.split(',')[0]);
          const r = Number(coordinate.split(',')[1]);
          return (
            <Hexagon q={q} r={r} fill="pat-2">
              <Text>{name}</Text>
            </Hexagon>);
        })}

      </Layout>
    </HexGrid>
  );
}

export default HexaGrid;
