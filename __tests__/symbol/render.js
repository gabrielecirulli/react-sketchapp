import React from 'react';
import { renderToJSON, injectSymbols, makeSymbol, View, Text } from '../../src';
import Artboard from '../../src/components/Artboard';

describe('Symbol instance rendering', () => {
  it('renders a symbol instance with the same frame as its master', () => {
    const Button = ({ label }) => (
      <View style={{ padding: 20 }}><Text name="label">{label}</Text></View>
      );

    const ButtonSymbol = makeSymbol(Button);

    const renderedButtonJSON = renderToJSON(<Button />);
    const renderedButtonSymbolJSON = renderToJSON(<ButtonSymbol />);

    expect(renderedButtonJSON.frame).toEqual(renderedButtonSymbolJSON.frame);
  });
});
