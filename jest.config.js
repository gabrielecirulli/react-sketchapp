module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/_book',
    '<rootDir>/lib',
    '<rootDir>/scratch',
  ],
  globals: {
    CGSizeMake: true,
    COSAlertWindow: true,
    CGAffineTransformMakeRotation: true,
    CGAffineTransformMakeScale: true,
    CGAffineTransformMakeTranslation: true,
    CGAffineTransformConcat: true,
    log: true,
    MSArtboardGroup: true,
    MSColor: true,
    MSImageData: true,
    MSLayerGroup: true,
    MSOvalShape: true,
    MSRect: true,
    MSRectangleShape: true,
    MSShapeGroup: true,
    MSTextLayer: true,
    NSArray: true,
    NSFontCondensedTrait: true,
    NSFontItalicTrait: true,
    NSFontManager: true,
    NSFontSymbolicTrait: true,
    NSFontTraitsAttribute: true,
    NSFontWeightBlack: true,
    NSFontWeightBold: true,
    NSFontWeightHeavy: true,
    NSFontWeightLight: true,
    NSFontWeightMedium: true,
    NSFontWeightRegular: true,
    NSFontWeightSemibold: true,
    NSFontWeightThin: true,
    NSFontWeightTrait: true,
    NSFontWeightUltraLight: true,
    NSFont: true,
    NSFontAttributeName: true,
    NSImage: true,
    NSKernAttributeName: true,
    NSMakeRect: true,
    NSMutableParagraphStyle: true,
    NSParagraphStyleAttributeName: true,
    NSString: true,
    NSStringDrawingUsesLineFragmentOrigin: true,
    NSTextField: true,
    NSTextView: true,
    NSURL: true,
    NSView: true,
    React$Component: true,
    React$Element: true,
    ReactClass: true,
    ReactComponent: true,
  },
};