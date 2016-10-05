import reportNulls from './report-nulls'

test('Should report null fields', () => {
  const doc = {
    present: 'hi',
    otherPresent: 'good morning',
    notPresent: null,
    presents: ['hi', 'hola'],
    emptyString: '',
    notDefined: undefined,
    anEmptyObject: {},
    notEmptyObject: {
      a: 1,
      b: null,
      c: undefined,
      d: 4
    }
  }
  const expected = {
    notPresent: '',
    emptyString: '',
    notDefined: ''
  }
  const result = reportNulls(doc, false)
  expect(result).toEqual(expected)
})

test('Should not detect empty strings if option enabled', () => {
  const doc = {
    present: 'hi',
    otherPresent: 'good morning',
    notPresent: null,
    emptyString: ''
  }
  const expected = {
    notPresent: '',
  }
  const result = reportNulls(doc, true)
  expect(result).toEqual(expected)
})
