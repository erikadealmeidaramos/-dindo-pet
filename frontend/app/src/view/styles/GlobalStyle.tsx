import {StyleSheet} from 'react-native';
import Fonts from './Fonts';

export default StyleSheet.create({
  ScrollContainer: {
    flex: 1,
    backgroundColor: '#F0ECE6',
  },

  BodyContainer: {
    fontFamily: Fonts.BodyText.fontFamily,
    fontSize: Fonts.BodyText.fontSize,
    color: Fonts.BodyText.color,
    backgroundColor: '#F0ECE6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  header1: {
    fontFamily: Fonts.Header1.fontFamily,
    fontSize: Fonts.Header1.fontSize,
    color: Fonts.Header1.color,
  },

  header2: {
    fontFamily: Fonts.Header2.fontFamily,
    fontSize: Fonts.Header2.fontSize,
    color: Fonts.Header2.color,
    alignSelf: 'flex-start',
  },

  header3: {
    fontFamily: Fonts.Header3.fontFamily,
    fontSize: Fonts.Header3.fontSize,
    color: Fonts.Header3.color,
  },

  subtitle: {
    fontFamily: Fonts.Subtitle.fontFamily,
    fontSize: Fonts.Subtitle.fontSize,
    color: Fonts.Subtitle.color,
  },

  label: {
    fontFamily: Fonts.Label.fontFamily,
    fontSize: Fonts.Label.fontSize,
    color: Fonts.Label.color,
  },

  link: {
    fontFamily: Fonts.Link.fontFamily,
    fontSize: Fonts.Link.fontSize,
    color: Fonts.Link.color,
  },

  bodyText: {
    fontFamily: Fonts.BodyText.fontFamily,
    fontSize: Fonts.BodyText.fontSize,
    color: Fonts.BodyText.color,
  },
});
