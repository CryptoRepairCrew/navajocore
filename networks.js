var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('80503420'),
  addressVersion: 125,
  privKeyVersion: 85,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('594A705A4A6B79D536D1B556D8F1E37E949F5FB5BE8E75906C187CBE29070000'),
    merkle_root: hex('E9FEC834B6055A745D9E05E98871EE4A4EEEE002444214D9004CE0C91A7826F3'),
    height: 0,
    nonce: 552236,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1401734150,
    bits: 486604799
  },
  dnsSeeds: [
    'navajosupernode2.no-ip.biz',
    'navajosupernode3.no-ip.biz',
    'navajosupernode4.no-ip.biz',
    'navajosupernode5.no-ip.biz'
  ],
  defaultClientPort: 44444,
  lastPoWBlock: 160000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
