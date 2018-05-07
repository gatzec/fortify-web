export const DEFAULT = {
  id: '[[id]]',
  _id: '[[id]]',
  name: '',
  selected: false,
  type: 'certificate',
  pem: '',
  general: {
    serialNumber: '',
    version: '',
    notBefore: '',
    notAfter: '',
    thumbprint: '',
    issuerDN: '',
    subjectDN: '',
  },
  subject: {},
  issuer: {},
  publicKey: {
    modulusBits: '',
    namedCurve: '',
    publicExponent: '',
    algorithm: '',
    value: '',
  },
  signature: {
    algorithm: '',
    hash: '',
    value: '',
  },
  extensions: [],
};
