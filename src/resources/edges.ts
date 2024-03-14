type GetShortHandOfEdgeType = {
  style: 'margin' | 'padding';
  endpoint?: string;
  values: number[];
};

const getShortHandOfEdge = ({
  style,
  endpoint = '',
  values,
}: GetShortHandOfEdgeType) => {
  const _genCss = (...args: number[]) => ({
    [style + 'Top' + endpoint]: args[0],
    [style + 'Right' + endpoint]: args[1],
    [style + 'Bottom' + endpoint]: args[2],
    [style + 'Left' + endpoint]: args[3],
  });

  if (values.length === 1) {
    return _genCss(values[0], values[0], values[0], values[0]);
  }
  if (values.length === 2) {
    return _genCss(values[0], values[1], values[0], values[1]);
  }
  if (values.length === 3) {
    return _genCss(values[0], values[1], values[2], values[1]);
  }
  return _genCss(values[0], values[1], values[2], values[3]);
};

function padding(...values: number[]) {
  return getShortHandOfEdge({style: 'padding', values});
}

function margin(...values: number[]) {
  return getShortHandOfEdge({style: 'margin', values});
}

export default {padding, margin};
